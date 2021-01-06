import React from "react";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";

import { useStyles } from "./styles";

interface AnimatedImageProps {
  uri: string;
  index: number;
  currentIndex: Animated.SharedValue<number>;
  width: number;
  height: number;
}

const AnimatedImage: React.FC<AnimatedImageProps> = ({
  uri,
  index,
  currentIndex,
  width,
  height,
}) => {
  const { imageStyles } = useStyles();

  const inputRange = [index - 1, index, index + 1];

  const animatedStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      currentIndex.value,
      inputRange,
      [0, 1, 0],
      Extrapolate.CLAMP
    );
    const scale = interpolate(
      currentIndex.value,
      inputRange,
      [0.5, 1, 0.5],
      Extrapolate.CLAMP
    );
    return {
      opacity,
      transform: [{ scale }],
    };
  });

  return (
    <Animated.Image
      key={uri}
      source={{ uri }}
      style={[
        imageStyles,
        {
          width,
          height,
        },
        animatedStyle,
      ]}
      resizeMode="contain"
    />
  );
};

export default AnimatedImage;
