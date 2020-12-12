import React, { useRef } from "react";
import { TextInput } from "react-native";

import { Box, Text } from "../../../../../theme";
import { useStyles } from "../styles";
import Button from "../../../../../components/animated/Button";
import { SlideProps } from "../types";

import PasswordController from "./components/PasswordController";

const Password: React.FC<SlideProps> = ({
  control,
  errors,
  submitEnabled,
  onSubmit,
}) => {
  const { containerStyles, slideTitleStyles } = useStyles();
  const passwordConfirmationRef = useRef<TextInput>(null);
  const onSubmitEditing = () => {
    passwordConfirmationRef.current?.focus();
  };

  return (
    <Box {...containerStyles}>
      <Text {...slideTitleStyles}>02. Your password</Text>
      <PasswordController
        name="password"
        errorMessage="Password is required"
        {...{ control, errors, onSubmitEditing }}
      />
      <PasswordController
        passwordInputRef={passwordConfirmationRef}
        name="passwordConfirmation"
        errorMessage="Password confirmation is required"
        extraContainerStyles={{ marginTop: "xs" }}
        {...{ control, errors }}
      />
      <Button onPress={onSubmit} enabled={submitEnabled} label="Submit" />
    </Box>
  );
};

export default Password;
