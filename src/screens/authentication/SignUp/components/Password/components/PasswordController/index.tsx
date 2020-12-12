import React from "react";
import { Controller } from "react-hook-form";
import { BoxProps } from "@shopify/restyle";
import { TextInput } from "react-native";

import Input from "../../../../../../../components/animated/Input";
import { BaseControllerProps } from "../../../../../../../utils/types";
import { Theme } from "../../../../../../../theme";

interface PasswordControllerProps extends BaseControllerProps {
  name: string;
  errorMessage: string;
  extraContainerStyles?: BoxProps<Theme>;
  onSubmitEditing?: () => void;
  passwordInputRef?: React.RefObject<TextInput>;
}

const PasswordController: React.FC<PasswordControllerProps> = ({
  control,
  errors,
  name,
  errorMessage,
  extraContainerStyles,
  onSubmitEditing,
  passwordInputRef,
}) => {
  return (
    <Controller
      {...{ control, name }}
      render={({ value, onBlur, onChange }) => (
        <Input
          ref={passwordInputRef}
          privateProps={{
            ...{ value, onBlur, onChange },
            error: errors.password,
            iconName: "lock",
            placeholderText: "Password",
            extraContainerStyles,
          }}
          inputProps={{
            returnKeyType: "send",
            autoCapitalize: "none",
            autoCorrect: false,
            onSubmitEditing,
          }}
          isPasswordInput
        />
      )}
      defaultValue=""
      rules={{
        required: errorMessage,
        minLength: {
          message: "Minimum of 6 characters",
          value: 6,
        },
      }}
    />
  );
};

export default PasswordController;
