import React from "react";
import { RectButton } from "react-native-gesture-handler";

import { Box, Text } from "../../../theme";
import LargeUnion from "../../svgs/animated/LargeUnion";
import Done from "../../svgs/animated/Done";

import { useStyles } from "./styles";

interface FullScreenNotificationProps {
  error?: boolean;
  title: string;
  description: string;
  onPress(): void;
}

const FullScreenNotification: React.FC<FullScreenNotificationProps> = ({
  title,
  description,
  onPress,
}) => {
  const {
    containerStyles,
    doneStyles,
    titleStyles,
    descriptionStyles,
    buttonStyles,
    buttonTextStyles,
  } = useStyles();
  return (
    <Box {...containerStyles}>
      <LargeUnion />
      <Done style={doneStyles} />
      <Text {...titleStyles}>{title}</Text>
      <Text {...descriptionStyles}>{description}</Text>
      <RectButton style={buttonStyles} {...{ onPress }}>
        <Text {...buttonTextStyles}>Ok</Text>
      </RectButton>
    </Box>
  );
};

export default FullScreenNotification;
