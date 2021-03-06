import React from "react";
import Animated, {
  interpolate,
  useAnimatedStyle,
  Extrapolate,
} from "react-native-reanimated";

import { useStyles } from "./styles";

interface ProgressIndicatorProps {
  index: number;
  currentIndex: Animated.SharedValue<number>;
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  index,
  currentIndex,
}) => {
  const progressIndicatorStyles = useStyles(index);
  const inputRange = [index - 1, index, index + 1];
  const animatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      currentIndex.value,
      inputRange,
      [0.4, 1, 0.4],
      Extrapolate.CLAMP
    ),
    transform: [
      {
        scale: interpolate(
          currentIndex.value,
          inputRange,
          [0.8, 1, 0.8],
          Extrapolate.CLAMP
        ),
      },
    ],
  }));

  return <Animated.View style={[progressIndicatorStyles, animatedStyle]} />;
};

export default ProgressIndicator;
