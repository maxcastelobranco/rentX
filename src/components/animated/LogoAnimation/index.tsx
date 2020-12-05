import React, { useEffect } from "react";
import Animated, {
  Easing,
  runOnUI,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import Logo from "../../svgs/static/Logo";
import Union from "../../svgs/static/Union";

import { useStyles } from "./styles";

interface LogoAnimationProps {
  loop?: boolean;
  top?: number;
}

export const SPLASH_ANIMATION_DURATION = 2000;

const timingConfig: Animated.WithTimingConfig = {
  duration: SPLASH_ANIMATION_DURATION,
  easing: Easing.bezier(0.64, 0, 0.78, 0),
};

const LogoAnimation: React.FC<LogoAnimationProps> = ({ loop, top }) => {
  const { logoStyles, unionStyles } = useStyles();

  const logoOpacity = useSharedValue(0);
  const unionOpacity = useSharedValue(0);
  const animatedLogoStyle = useAnimatedStyle(() => {
    return {
      opacity: logoOpacity.value,
    };
  });
  const animatedUnionStyle = useAnimatedStyle(() => {
    return {
      opacity: unionOpacity.value,
    };
  });

  useEffect(() => {
    const animate = runOnUI(() => {
      logoOpacity.value = withTiming(1, timingConfig, () => {
        logoOpacity.value = withTiming(0, timingConfig, () => {
          unionOpacity.value = withTiming(1, timingConfig, () => {
            unionOpacity.value = withTiming(0, timingConfig);
          });
        });
      });
    });
    let intervalId: NodeJS.Timeout;

    if (loop) {
      intervalId = setInterval(() => {
        animate();
      }, SPLASH_ANIMATION_DURATION * 4);
    } else {
      animate();
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [logoOpacity, loop, unionOpacity]);

  return (
    <>
      <Animated.View
        style={[logoStyles, top ? { top } : undefined, animatedLogoStyle]}
      >
        <Logo />
      </Animated.View>
      <Animated.View
        style={[unionStyles, top ? { top } : undefined, animatedUnionStyle]}
      >
        <Union />
      </Animated.View>
    </>
  );
};

export default LogoAnimation;
