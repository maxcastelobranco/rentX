import React from "react";
import Animated, { useAnimatedStyle } from "react-native-reanimated";
import { useSpring } from "react-native-redash";

import { useStyles } from "./styles";

interface FocusIndicatorProps {
  selected: boolean;
}

const FocusIndicator: React.FC<FocusIndicatorProps> = ({ selected }) => {
  const { containerStyles } = useStyles();
  const selectedTransition = useSpring(selected);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: selectedTransition.value }],
    };
  });

  return <Animated.View style={[containerStyles, animatedStyle]} />;
};

export default FocusIndicator;
