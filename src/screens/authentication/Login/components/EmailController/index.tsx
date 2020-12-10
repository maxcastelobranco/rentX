import React from "react";
import { Controller } from "react-hook-form";

import { BaseControllerProps } from "../../../../../utils/types";
import Input from "../../../../../components/animated/Input";

interface EmailControllerProps extends BaseControllerProps {
  onSubmitEditing: () => void;
}

const EmailController: React.FC<EmailControllerProps> = ({
  control,
  errors,
  onSubmitEditing,
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
          privateProps={{
            ...{ value, onBlur, onChange },
            error: errors.email,
            iconName: "mail",
            placeholderText: "Email",
          }}
          inputProps={{
            onSubmitEditing,
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
