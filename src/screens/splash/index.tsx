import React, { useEffect } from "react";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import Union from "../../components/svgs/Union";
import Logo from "../../components/svgs/Logo";
import { Box } from "../../theme";

import { useStyles } from "./styles";

export const SPLASH_ANIMATION_DURATION = 2000;

const timingConfig: Animated.WithTimingConfig = {
  duration: SPLASH_ANIMATION_DURATION,
  easing: Easing.bezier(0.64, 0, 0.78, 0),
};

const Splash: React.FC = () => {
  const { containerStyles, svgStyles } = useStyles();

  const logoOpacity = useSharedValue(0);
  const unionOpacity = useSharedValue(0);

  useEffect(() => {
    logoOpacity.value = withTiming(1, timingConfig, () => {
      logoOpacity.value = withTiming(0, timingConfig, () => {
        unionOpacity.value = withTiming(1, timingConfig, () => {
          unionOpacity.value = withTiming(0, timingConfig);
        });
      });
    });
  }, [logoOpacity, unionOpacity]);

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

  return (
    <Box {...containerStyles}>
      <Animated.View style={[svgStyles, animatedLogoStyle]}>
        <Logo />
      </Animated.View>
      <Animated.View style={[svgStyles, animatedUnionStyle]}>
        <Union />
      </Animated.View>
    </Box>
  );
};

export default Splash;
