import React from "react";
import { Controller } from "react-hook-form";
import { TextInput } from "react-native";

import { BaseControllerProps } from "../../../../../utils/types";
import Input from "../../../../../components/animated/Input";

interface PasswordControllerProps extends BaseControllerProps {
  passwordInputRef: React.RefObject<TextInput>;
}

const PasswordController: React.FC<PasswordControllerProps> = ({
  control,
  errors,
  passwordInputRef,
}) => {
  return (
    <Controller
      {...{ control }}
      render={({ value, onBlur, onChange }) => (
        <Input
          ref={passwordInputRef}
          privateProps={{
            ...{ value, onBlur, onChange },
            error: errors.password,
            iconName: "lock",
            placeholderText: "Password",
            extraContainerStyles: {
              marginTop: "xs",
            },
          }}
          inputProps={{
            returnKeyType: "send",
            autoCapitalize: "none",
            autoCorrect: false,
          }}
          isPasswordInput
        />
      )}
      name="password"
      defaultValue=""
      rules={{
        required: "Password is required",
        minLength: {
          message: "Minimum of 6 characters",
          value: 6,
        },
      }}
    />
  );
};

export default PasswordController;
