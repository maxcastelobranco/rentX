import React, { useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { KeyboardAvoidingView, TextInput } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { CommonActions } from "@react-navigation/native";
import { useSharedValue, withSpring } from "react-native-reanimated";

import { Text } from "../../../theme";
import { AuthenticationNavigationProps } from "../../../routes/authentication";
import Button from "../../../components/animated/Button";
import GoBackButton from "../../../components/static/GoBackButton";
import api from "../../../services/api";
import {
  AuthenticationActionTypes,
  User,
} from "../../../context/reducers/authenticationReducer";
import { useAppContext } from "../../../context";
import Notification from "../../../components/animated/Notification";

import { useStyles } from "./styles";
import EmailController from "./components/EmailController";
import PasswordController from "./components/PasswordController";
import CheckBoxController from "./components/CheckboxController";

interface FormValues {
  email: string;
  password: string;
  remember: boolean;
}

const Login: React.FC<AuthenticationNavigationProps<"Login">> = ({
  navigation,
}) => {
  const {
    state: {
      authentication: { error, loading },
    },
    dispatch,
  } = useAppContext();
  const {
    containerStyles,
    titleStyles,
    descriptionStyles,
    notificationPosition,
  } = useStyles();
  const passwordInputRef = useRef<TextInput>(null);
  const {
    control,
    errors,
    setValue,
    formState,
    handleSubmit,
  } = useForm<FormValues>({
    mode: "onChange",
    criteriaMode: "all",
  });
  const shouldRenderNotification = useSharedValue(0);
  const onSubmitEditing = () => {
    passwordInputRef.current?.focus();
  };
  const toggleCheckBox = (value: boolean) => {
    setValue("remember", !value);
  };
  const onSubmit: SubmitHandler<FormValues> = async ({
    email,
    password,
    remember,
  }) => {
    dispatch({
      type: AuthenticationActionTypes.Login,
    });

    const { data } = await api.get<User[]>("users", {
      params: {
        email,
        password,
      },
    });
    const [user] = data;

    if (user) {
      if (remember) {
        await AsyncStorage.setItem("@rentX:userId", user.id);
      }

      dispatch({
        type: AuthenticationActionTypes.LoginSucceeded,
        payload: user,
      });
      navigation.dispatch(
        CommonActions.reset({
          routes: [{ name: "Home" }],
        })
      );
    } else {
      dispatch({
        type: AuthenticationActionTypes.LoginFailed,
      });
      shouldRenderNotification.value = withSpring(1);
      setTimeout(() => {
        shouldRenderNotification.value = withSpring(0);
      }, 3000);
    }
  };
  const enabled =
    Object.keys(formState.touched).length === 2 && !Object.keys(errors).length;

  return (
    <>
      <KeyboardAvoidingView style={containerStyles} behavior="position">
        <GoBackButton />
        <Text {...titleStyles}>We're almost there</Text>
        <Text {...descriptionStyles}>
          Login to embark on this amazing experience
        </Text>
        <EmailController {...{ control, errors, onSubmitEditing }} />
        <PasswordController {...{ control, errors, passwordInputRef }} />
        <CheckBoxController {...{ control, toggleCheckBox }} />
        <Button
          {...{ enabled, loading }}
          label="Login"
          onPress={handleSubmit(onSubmit)}
        />
      </KeyboardAvoidingView>
      <Notification
        {...{ shouldRenderNotification }}
        message={error}
        iconName="alert-octagon"
        iconColor="primary"
        backgroundColor="backgroundLight1"
        position={notificationPosition}
      />
    </>
  );
};

export default Login;
