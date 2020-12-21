import React from "react";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { RectButton } from "react-native-gesture-handler";
import { ViewStyle } from "react-native";

import { Text } from "../../../theme";

import { useStyles } from "./styles";

interface ButtonProps {
  enabled: boolean;
  label: string;
  onPress(): void;
  extraContainerStyles?: ViewStyle;
  extraButtonStyles?: ViewStyle;
}

const Button: React.FC<ButtonProps> = ({
  enabled,
  label,
  onPress,
  extraContainerStyles,
  extraButtonStyles,
}) => {
  const { containerStyles, buttonStyles, labelStyles } = useStyles();

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: enabled ? withTiming(1) : withTiming(0.4),
    };
  });

  return (
    <Animated.View
      style={[containerStyles, extraContainerStyles, animatedStyle]}
    >
      <RectButton
        style={[buttonStyles, extraButtonStyles]}
        {...{ enabled, onPress }}
      >
        <Text {...labelStyles}>{label}</Text>
      </RectButton>
    </Animated.View>
  );
};

export default Button;
