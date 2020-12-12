import React from "react";
import { Controller } from "react-hook-form";
import { TextInput } from "react-native";

import { BaseControllerProps } from "../../../../../../../utils/types";
import Input from "../../../../../../../components/animated/Input";

interface EmailControllerProps extends BaseControllerProps {
  emailInputRef: React.RefObject<TextInput>;
}

const EmailController: React.FC<EmailControllerProps> = ({
  control,
  errors,
  emailInputRef,
}) => {
  return (
    <Controller
      {...{ control }}
      name="email"
      defaultValue=""
      rules={{
        required: "Email is required",
        pattern: {
          message: "Invalid email",
          value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        },
      }}
      render={({ value, onBlur, onChange }) => (
        <Input
          ref={emailInputRef}
          privateProps={{
            value,
            onBlur,
            onChange,
            error: errors.email,
            iconName: "mail",
            placeholderText: "Email",
            extraContainerStyles: {
              marginTop: "xs",
            },
          }}
          inputProps={{
            autoCorrect: false,
            autoCapitalize: "none",
            keyboardType: "email-address",
            returnKeyType: "next",
          }}
        />
      )}
    />
  );
};

export default EmailController;
