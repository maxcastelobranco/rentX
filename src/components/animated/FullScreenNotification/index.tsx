import React from "react";
import { RectButton } from "react-native-gesture-handler";
import { useTheme } from "@shopify/restyle";

import { Box, Text, Theme } from "../../../theme";
import LargeUnion from "../../svgs/animated/LargeUnion";
import Done from "../../svgs/animated/Done";
import Cancel from "../../svgs/animated/Cancel";

import { useStyles } from "./styles";

interface FullScreenNotificationProps {
  error?: boolean;
  title: string;
  description: string;
  okButtonPress(): void;
  cancelButtonPress?(): void;
}

const FullScreenNotification: React.FC<FullScreenNotificationProps> = ({
  title,
  description,
  okButtonPress,
  cancelButtonPress,
}) => {
  const theme = useTheme<Theme>();
  const {
    containerStyles,
    iconStyles,
    titleStyles,
    descriptionStyles,
    buttonStyles,
    buttonTextStyles,
    yesOrNoStyles,
  } = useStyles();
  return (
    <Box {...containerStyles}>
      <LargeUnion />
      {cancelButtonPress ? (
        <Cancel style={iconStyles} />
      ) : (
        <Done style={iconStyles} />
      )}
      <Text {...titleStyles}>{title}</Text>
      <Text {...descriptionStyles}>{description}</Text>
      {cancelButtonPress ? (
        <Box {...yesOrNoStyles}>
          <RectButton
            style={[buttonStyles, { backgroundColor: theme.colors.primary }]}
            onPress={cancelButtonPress}
          >
            <Text {...buttonTextStyles}>No</Text>
          </RectButton>
          <RectButton style={buttonStyles} onPress={okButtonPress}>
            <Text {...buttonTextStyles}>Yes</Text>
          </RectButton>
        </Box>
      ) : (
        <RectButton style={buttonStyles} onPress={okButtonPress}>
          <Text {...buttonTextStyles}>Ok</Text>
        </RectButton>
      )}
    </Box>
  );
};

export default FullScreenNotification;
