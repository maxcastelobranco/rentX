import React from "react";
import Animated, { useAnimatedStyle } from "react-native-reanimated";
import { useTheme } from "@shopify/restyle";
import { Feather } from "@expo/vector-icons";
import { mix } from "react-native-redash";

import { Colors, Text, Theme } from "../../../theme";
import responsivePixelSize from "../../../utils/responsivePixelSize";

import { useStyles } from "./styles";

interface AbsolutePosition {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

interface NotificationProps {
  shouldRenderNotification: Animated.SharedValue<number>;
  message: string;
  iconName: string;
  iconColor: Colors;
  backgroundColor: Colors;
  position: Partial<AbsolutePosition>;
}

const ICON_SIZE = responsivePixelSize(24);

const Notification: React.FC<NotificationProps> = ({
  shouldRenderNotification,
  message,
  iconName,
  iconColor,
  backgroundColor,
  position,
}) => {
  const theme = useTheme<Theme>();
  const { styleSheet, messageStyles, NOTIFICATION_WIDTH } = useStyles();
  const backgroundColorHexCode = theme.colors[backgroundColor];
  const iconColorHexCode = theme.colors[iconColor];

  const animatedStyle = useAnimatedStyle(() => {
    const translateX = NOTIFICATION_WIDTH + theme.spacing.s * 2;

    return {
      opacity: shouldRenderNotification.value,
      transform: [
        { translateX: mix(shouldRenderNotification.value, -translateX, 0) },
      ],
    };
  });

  return (
    <Animated.View
      style={[
        styleSheet.container,
        { ...position, backgroundColor: backgroundColorHexCode },
        animatedStyle,
      ]}
    >
      <Feather name={iconName} size={ICON_SIZE} color={iconColorHexCode} />
      <Text {...messageStyles}>{message}</Text>
    </Animated.View>
  );
};

export default Notification;
