import React from "react";
import AsyncStorage from "@react-native-community/async-storage";

import FullScreenNotification from "../../../components/animated/FullScreenNotification";
import { HomeNavigationProps } from "../../../routes/home";
import { useAppContext } from "../../../context";
import { AuthenticationActionTypes } from "../../../context/reducers/authenticationReducer";

const ExitAppConfirmation: React.FC<
  HomeNavigationProps<"ExitAppConfirmation">
> = ({ navigation }) => {
  const { dispatch } = useAppContext();

  const logout = () => {
    AsyncStorage.clear().catch(console.error);
    dispatch({
      type: AuthenticationActionTypes.Logout,
    });
  };

  return (
    <FullScreenNotification
      title="Exit rentX"
      description="Are you sure you wanna logout?"
      okButtonPress={logout}
      cancelButtonPress={navigation.goBack}
    />
  );
};

export default ExitAppConfirmation;
