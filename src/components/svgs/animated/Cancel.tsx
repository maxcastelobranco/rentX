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

const Cancel: React.FC<SvgProps> = (props: SvgProps) => {
  const borderRef = useAnimatedRef<typeof AnimatedPath>();
  const xRef = useAnimatedRef<typeof AnimatedPath>();
  const [borderLength, setBorderLength] = useState(0);
  const [xLength, setXLength] = useState(0);

  const animationDriver = useSharedValue(0);

  useEffect(() => {
    animationDriver.value = withTiming(1, timingConfig);
  }, [animationDriver]);

  const animatedBorderProps = useAnimatedProps(() => {
    return {
      strokeDashoffset: mix(animationDriver.value, borderLength, 0),
    };
  });
  const animatedXProps = useAnimatedProps(() => {
    return {
      strokeDashoffset: mix(animationDriver.value, xLength, 0),
    };
  });

  return (
    <Svg width={80} height={80} viewBox="0 0 80 80" {...props}>
      <AnimatedPath
        ref={borderRef}
        onLayout={() => {
          setBorderLength(borderRef.current.getTotalLength);
        }}
        strokeDasharray={borderLength}
        animatedProps={animatedBorderProps}
        fill="none"
        stroke="#29292e"
        strokeWidth={6}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        d="M13.253 10.259h53.494v59.482H13.253z"
      />
      <AnimatedPath
        ref={xRef}
        onLayout={() => {
          setXLength(xRef.current.getTotalLength);
        }}
        strokeDasharray={xLength}
        animatedProps={animatedXProps}
        fill="none"
        stroke="#dc1637"
        strokeWidth={6}
        strokeMiterlimit={10}
        d="M30.573 30.57l18.854 18.86M49.427 30.57L30.573 49.43"
      />
    </Svg>
  );
};

export default Cancel;
