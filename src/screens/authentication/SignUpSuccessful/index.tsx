import React from "react";

import FullScreenNotification from "../../../components/animated/FullScreenNotification";
import { AuthenticationNavigationProps } from "../../../routes/authentication";

const SignUpSuccessful: React.FC<
  AuthenticationNavigationProps<"SignUpSuccessful">
> = ({ navigation }) => {
  return (
    <FullScreenNotification
      title="Account created!"
      description="Now just login and enjoy"
      okButtonPress={() => {
        navigation.navigate("Login");
      }}
    />
  );
};

export default SignUpSuccessful;
