import React from "react";
import { Controller } from "react-hook-form";

import { BaseControllerProps } from "../../../../../../../utils/types";
import Input from "../../../../../../../components/animated/Input";

const NameController: React.FC<BaseControllerProps> = ({ control, errors }) => {
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
        />
      )}
    />
  );
};

export default NameController;
