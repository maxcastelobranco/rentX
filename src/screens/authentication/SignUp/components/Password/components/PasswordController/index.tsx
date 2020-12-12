import React from "react";
import { Controller } from "react-hook-form";
import { BoxProps } from "@shopify/restyle";

import Input from "../../../../../../../components/animated/Input";
import { BaseControllerProps } from "../../../../../../../utils/types";
import { Theme } from "../../../../../../../theme";

interface PasswordControllerProps extends BaseControllerProps {
  name: string;
  errorMessage: string;
  extraContainerStyles?: BoxProps<Theme>;
}

const PasswordController: React.FC<PasswordControllerProps> = ({
  control,
  errors,
  name,
  errorMessage,
  extraContainerStyles,
}) => {
  return (
    <Controller
      {...{ control, name }}
      render={({ value, onBlur, onChange }) => (
        <Input
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
