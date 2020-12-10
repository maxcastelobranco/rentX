import React from "react";
import { StyleSheet } from "react-native";
import Animated, { useAnimatedStyle } from "react-native-reanimated";
import { BoxProps, TextProps } from "@shopify/restyle";
import { mix } from "react-native-redash";

import { Box, Text, Theme } from "../../../../../theme";
import { transformOrigin } from "../../../../../utils/transformOrigin";

interface PlaceholderProps {
  animationDriver: Animated.SharedValue<number>;
  placeholderText: string;
}

const Placeholder: React.FC<PlaceholderProps> = ({
  animationDriver,
  placeholderText,
}) => {
  const width = placeholderText.length * 12;

  const containerStyles: BoxProps<Theme> = {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    paddingLeft: "s",
  };
  const placeholderTextStyles: TextProps<Theme> = {
    variant: "regularTextMediumLight",
  };

  const animatedStyle = useAnimatedStyle(() => {
    const translateY = mix(animationDriver.value, 0, -36);
    const scale = mix(animationDriver.value, 1, 0.6);

    return {
      transform: transformOrigin(
        { x: -width / 2, y: 0 },
        { scale },
        { translateY }
      ),
    };
  });

  return (
    <Box {...containerStyles}>
      <Animated.View style={[{ width }, animatedStyle]}>
        <Text {...placeholderTextStyles}>{placeholderText}</Text>
      </Animated.View>
    </Box>
  );
};

export default Placeholder;
