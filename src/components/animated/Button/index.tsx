import React from "react";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { RectButton } from "react-native-gesture-handler";

import { Text } from "../../../theme";

import { useStyles } from "./styles";

interface ButtonProps {
  enabled: boolean;
  label: string;
  onPress(): void;
}

const Button: React.FC<ButtonProps> = ({ enabled, label, onPress }) => {
  const { containerStyles, buttonStyles, labelStyles } = useStyles();

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: enabled ? withTiming(1) : withTiming(0.4),
    };
  });

  return (
    <Animated.View style={[containerStyles, animatedStyle]}>
      <RectButton
        style={buttonStyles}
        onPress={() => {
          enabled && onPress();
        }}
      >
        <Text {...labelStyles}>{label}</Text>
      </RectButton>
    </Animated.View>
  );
};

export default Button;
