import { Vector } from "react-native-redash";
import Animated from "react-native-reanimated";

export const transformOrigin = (
  { x, y }: Vector,
  ...transformations: Animated.AnimatedTransform
): Animated.AnimatedTransform => {
  "worklet";
  return [
    { translateX: x },
    { translateY: y },
    ...transformations,
    { translateX: x * -1 },
    { translateY: y * -1 },
  ];
};
