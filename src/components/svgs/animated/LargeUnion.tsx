import * as React from "react";
import Svg, { SvgProps, Polygon } from "react-native-svg";
import Animated, {
  Easing,
  useAnimatedProps,
  useSharedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";
import { useEffect } from "react";

const AnimatedPolygon = Animated.createAnimatedComponent(Polygon);
const timingConfig: Animated.WithTimingConfig = {
  duration: 500,
  easing: Easing.bezier(0, 0.55, 0.45, 1),
};

const LargeUnion: React.FC<SvgProps> = (props: SvgProps) => {
  const opacity1 = useSharedValue(0);
  const opacity2 = useSharedValue(0);
  const opacity3 = useSharedValue(0);

  const animatedProps1 = useAnimatedProps(() => {
    return {
      opacity: opacity1.value,
    };
  });
  const animatedProps2 = useAnimatedProps(() => {
    return {
      opacity: opacity2.value,
    };
  });
  const animatedProps3 = useAnimatedProps(() => {
    return {
      opacity: opacity3.value,
    };
  });

  useEffect(() => {
    opacity1.value = withDelay(1000, withTiming(1, timingConfig));
    opacity2.value = withDelay(1500, withTiming(1, timingConfig));
    opacity3.value = withDelay(2000, withTiming(1, timingConfig));
  }, [opacity1, opacity2, opacity3]);

  return (
    <Svg
      width={375}
      height={235}
      viewBox="0 0 375 235"
      fill="none"
      opacity={0.1}
      {...props}
    >
      <AnimatedPolygon
        animatedProps={animatedProps1}
        points="3.94 1.922 142.374 70.231 92.098 95.067 0 49.623 0 0 3.94 1.922"
        fill="#fff"
        fill-rule="evenodd"
      />
      <AnimatedPolygon
        animatedProps={animatedProps2}
        points="374.997 185.044 374.997 234.667 232.992 164.628 283.227 139.792 374.997 185.044"
        fill="#fff"
        fill-rule="evenodd"
      />
      <AnimatedPolygon
        animatedProps={animatedProps3}
        points="375 49.67 375 0.046 371.101 1.92 187.685 92.567 187.644 92.567 137.408 117.451 0 185.328 0 235 187.685 142.238 237.92 117.403 375 49.67"
        fill="#fff"
        fill-rule="evenodd"
      />
    </Svg>
  );
};

export default LargeUnion;
