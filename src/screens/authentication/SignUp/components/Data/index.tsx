import React from "react";
import { scrollTo, runOnUI } from "react-native-reanimated";
import { Dimensions } from "react-native";

import { Box, Text } from "../../../../../theme";
import { useStyles } from "../styles";
import Button from "../../../../../components/animated/Button";
import { SlideProps } from "../types";

import NameController from "./components/NameController";
import EmailController from "./components/EmailController";

const { width } = Dimensions.get("window");

const Data: React.FC<SlideProps> = ({
  control,
  errors,
  scrollEnabled,
  scrollViewRef,
}) => {
  const { containerStyles, slideTitleStyles } = useStyles();
  const onPress = () => {
    runOnUI(() => {
      "worklet";
      scrollTo(scrollViewRef, width, 0, true);
    })();
  };

  return (
    <Box {...containerStyles}>
      <Text {...slideTitleStyles}>01. Your info</Text>
      <NameController {...{ control, errors }} />
      <EmailController {...{ control, errors }} />
      <Button {...{ onPress }} enabled={scrollEnabled} label="Next" />
    </Box>
  );
};

export default Data;
