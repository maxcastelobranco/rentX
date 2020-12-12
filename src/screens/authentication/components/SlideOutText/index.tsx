import React from "react";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { TextStyle } from "react-native";

import { Box } from "../../../../theme";

interface SlideOutTextProps {
  text: string;
  style: TextStyle;
  translationX: Animated.SharedValue<number>;
  inputRange: number[];
}

const SlideOutText: React.FC<SlideOutTextProps> = ({
  text,
  style,
  translationX,
  inputRange,
}) => {
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(translationX.value, inputRange, [
            100,
            0,
            100,
          ]),
        },
      ],
    };
  });

  return (
    <Box overflow="hidden">
      <Animated.Text style={[style, animatedStyle]}>{text}</Animated.Text>
    </Box>
  );
};

export default SlideOutText;
