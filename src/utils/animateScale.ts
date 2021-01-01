import Animated from "react-native-reanimated";

import { transformOrigin } from "./transformOrigin";

interface AnimateScaleParams {
  direction: "fromLeft" | "fromRight";
  size: number;
  scale: Animated.SharedValue<number>;
}

export const animateScale = ({
  direction,
  size,
  scale,
}: AnimateScaleParams) => {
  "worklet";
  switch (direction) {
    case "fromLeft":
      return transformOrigin({ x: -size, y: 0 }, { scale: scale.value });
    case "fromRight":
      return transformOrigin({ x: size, y: 0 }, { scale: scale.value });
  }
};
