import React from "react";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { Dimensions } from "react-native";
import { useTheme } from "@shopify/restyle";

import { Box, Theme } from "../../../../../theme";
import SlideOutText from "../../../components/SlideOutText";

import { useStyles } from "./styles";

interface SlideProps {
  Icon: React.FC;
  index: number;
  title: string[];
  description: string[];
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
  const theme = useTheme<Theme>();

  const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
  const outputRange = [0, 1, 0];
  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(translationX.value, inputRange, outputRange),
    };
  });

  return (
    <Animated.View style={[containerStyles, animatedStyle]}>
      <Box {...headerStyles}>
        <Icon />
        <SlideOutText
          text={`${0}${index + 1}`}
          style={numerationStyles}
          {...{ translationX, inputRange }}
        />
      </Box>
      {title.map((sentence, idx) => (
        <SlideOutText
          key={idx}
          text={sentence}
          style={titleStyles}
          {...{ translationX, inputRange }}
        />
      ))}
      {description.map((sentence, idx) => (
        <SlideOutText
          key={idx}
          text={sentence}
          style={
            idx === 0
              ? { ...descriptionStyles, marginTop: theme.spacing.ml }
              : descriptionStyles
          }
          {...{ translationX, inputRange }}
        />
      ))}
    </Animated.View>
  );
};

export default Slide;
