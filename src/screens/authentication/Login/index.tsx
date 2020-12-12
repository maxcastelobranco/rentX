import React, { useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { KeyboardAvoidingView, TextInput } from "react-native";

import { Text } from "../../../theme";
import { AuthenticationNavigationProps } from "../../../routes/authentication";
import Button from "../../../components/animated/Button";
import GoBackButton from "../../../components/static/GoBackButton";

import { useStyles } from "./styles";
import EmailController from "./components/EmailController";
import PasswordController from "./components/PasswordController";
import CheckBoxController from "./components/CheckboxController";

interface FormValues {
  email: string;
  password: string;
  remember: boolean;
}

const Login: React.FC<AuthenticationNavigationProps<"Login">> = () => {
  const { containerStyles, titleStyles, descriptionStyles } = useStyles();
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
  const onSubmitEditing = () => {
    passwordInputRef.current?.focus();
  };
  const toggleCheckBox = (value: boolean) => {
    setValue("remember", !value);
  };
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };
  const enabled =
    Object.keys(formState.touched).length === 2 && !Object.keys(errors).length;

  return (
    <KeyboardAvoidingView style={containerStyles} behavior="position">
      <GoBackButton />
      <Text {...titleStyles}>We're almost there</Text>
      <Text {...descriptionStyles}>
        Login to embark on this amazing experience
      </Text>
      <EmailController {...{ control, errors, onSubmitEditing }} />
      <PasswordController {...{ control, errors, passwordInputRef }} />
      <CheckBoxController {...{ control, toggleCheckBox }} />
      <Button {...{ enabled }} label="Login" onPress={handleSubmit(onSubmit)} />
    </KeyboardAvoidingView>
  );
};

export default Login;
