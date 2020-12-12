import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import Animated, {
  Easing,
  useAnimatedProps,
  useAnimatedRef,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useEffect, useState } from "react";
import { mix } from "react-native-redash";

const AnimatedPath = Animated.createAnimatedComponent(Path);

const timingConfig: Animated.WithTimingConfig = {
  duration: 2400,
  easing: Easing.bezier(0.87, 0, 0.13, 1),
};

const Done: React.FC<SvgProps> = (props: SvgProps) => {
  const borderRef = useAnimatedRef<typeof AnimatedPath>();
  const checkRef = useAnimatedRef<typeof AnimatedPath>();
  const [borderLength, setBorderLength] = useState(0);
  const [checkLength, setCheckLength] = useState(0);

  const animationDriver = useSharedValue(0);

  useEffect(() => {
    animationDriver.value = withTiming(1, timingConfig);
    animationDriver.value = withTiming(1, timingConfig);
  }, [animationDriver, borderLength, checkLength]);

  const animatedBorderProps = useAnimatedProps(() => {
    return {
      strokeDashoffset: mix(animationDriver.value, borderLength, 0),
    };
  });
  const animatedCheckProps = useAnimatedProps(() => {
    return {
      strokeDashoffset: mix(animationDriver.value, checkLength, 0),
    };
  });

  return (
    <Svg
      width={61.7262}
      height={68.1158}
      data-name="Layer 1"
      viewBox="0 0  61.7262 68.1158"
      {...props}
    >
      <AnimatedPath
        ref={borderRef}
        onLayout={() => {
          setBorderLength(borderRef.current.getTotalLength);
        }}
        strokeDasharray={borderLength}
        animatedProps={animatedBorderProps}
        fill="none"
        stroke="#29292e"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={6}
        d="M3.003 3H58.72v62.113H3.003z"
      />
      <AnimatedPath
        ref={checkRef}
        onLayout={() => {
          setCheckLength(checkRef.current.getTotalLength);
        }}
        strokeDasharray={checkLength}
        animatedProps={animatedCheckProps}
        fill="none"
        stroke="#03b352"
        strokeMiterlimit={10}
        strokeWidth={6}
        d="M15.369 31.354l12.132 12.132L46.358 24.63"
      />
    </Svg>
  );
};

export default Done;
