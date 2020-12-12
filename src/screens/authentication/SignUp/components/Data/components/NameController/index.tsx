import React from "react";
import { Controller } from "react-hook-form";

import { BaseControllerProps } from "../../../../../../../utils/types";
import Input from "../../../../../../../components/animated/Input";

interface NameControllerProps extends BaseControllerProps {
  onSubmitEditing(): void;
}

const NameController: React.FC<NameControllerProps> = ({
  control,
  errors,
  onSubmitEditing,
}) => {
  return (
    <Controller
      {...{ control }}
      name="name"
      defaultValue=""
      rules={{
        required: "Name is required",
      }}
      render={({ value, onBlur, onChange }) => (
        <Input
          privateProps={{
            value,
            onBlur,
            onChange,
            error: errors.name,
            iconName: "user",
            placeholderText: "Name",
          }}
          inputProps={{
            returnKeyType: "next",
            onSubmitEditing,
          }}
        />
      )}
    />
  );
};

export default NameController;
