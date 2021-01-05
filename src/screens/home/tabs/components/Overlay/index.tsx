import React from "react";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { StyleSheet } from "react-native";

interface OverlayProps {
  open: Animated.SharedValue<boolean>;
}

const Overlay: React.FC<OverlayProps> = ({ open }) => {
  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(open.value ? 0.7 : 0),
    };
  });

  return (
    <Animated.View
      pointerEvents="none"
      style={[
        {
          ...StyleSheet.absoluteFillObject,
          backgroundColor: "#000000",
        },
        animatedStyle,
      ]}
    />
  );
};

export default Overlay;
