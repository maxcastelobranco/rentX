import React from "react";
import Animated, { useAnimatedStyle } from "react-native-reanimated";

import LogoAnimation from "../../components/animated/LogoAnimation";

import { useStyles } from "./styles";

interface SplashProps {
  opacity: Animated.SharedValue<number>;
}

const Splash: React.FC<SplashProps> = ({ opacity }) => {
  const { containerStyles } = useStyles();

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  return (
    <Animated.View style={[containerStyles, animatedStyle]}>
      <LogoAnimation />
    </Animated.View>
  );
};

export default Splash;
