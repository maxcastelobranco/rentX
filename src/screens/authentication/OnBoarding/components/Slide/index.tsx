import React from "react";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { Dimensions } from "react-native";

import { Box, Text } from "../../../../../theme";

import { useStyles } from "./styles";

interface SlideProps {
  Icon: React.FC;
  index: number;
  title: string;
  description: string;
  translationX: Animated.SharedValue<number>;
}

const { width } = Dimensions.get("window");

const Slide: React.FC<SlideProps> = ({
  Icon,
  index,
  title,
  description,
  translationX,
}) => {
  const {
    containerStyles,
    headerStyles,
    numerationStyles,
    titleStyles,
    descriptionStyles,
  } = useStyles();
  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        translationX.value,
        [(index - 1) * width, index * width, (index + 1) * width],
        [0, 1, 0]
      ),
    };
  });
  return (
    <Animated.View style={[containerStyles, animatedStyle]}>
      <Box {...headerStyles}>
        <Icon />
        <Text {...numerationStyles}>{`${0}${index + 1}`}</Text>
      </Box>
      <Text {...titleStyles}>{title}</Text>
      <Text {...descriptionStyles}>{description}</Text>
    </Animated.View>
  );
};

export default Slide;
