import React from "react";
import { RectButton } from "react-native-gesture-handler";
import Animated, { useAnimatedStyle } from "react-native-reanimated";
import { mix, useSpring } from "react-native-redash";

import { Box, Text } from "../../../theme";

import { useStyles } from "./styles";

interface CheckBoxProps {
  value: boolean;
  onChange(): void;
}

const CheckBox: React.FC<CheckBoxProps> = ({ value, onChange }) => {
  const {
    containerStyles,
    innerCheckBoxStyles,
    checkBoxStyles,
    textStyles,
  } = useStyles();
  const springTransition = useSpring(value);

  const animatedStyle = useAnimatedStyle(() => {
    const rotate = mix(springTransition.value, 45, 0);
    const scale = mix(springTransition.value, 1.5, 0.3);

    return {
      transform: [{ rotate: `${rotate}deg` }, { scale }],
    };
  });

  return (
    <RectButton onPress={onChange} style={containerStyles}>
      <Box {...checkBoxStyles}>
        <Animated.View style={[innerCheckBoxStyles, animatedStyle]} />
      </Box>
      <Text {...textStyles}>Remember me</Text>
    </RectButton>
  );
};

export default CheckBox;
