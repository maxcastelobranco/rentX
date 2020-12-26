import React from "react";
import Animated, {
  Easing,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { RectButton } from "react-native-gesture-handler";
import { FontAwesome5 } from "@expo/vector-icons";

import { Box, Text } from "../../../../../../theme";
import responsivePixelSize from "../../../../../../utils/responsivePixelSize";

import { useStyles } from "./styles";

interface ResultsProps {
  anyPickerOpen: Animated.SharedValue<boolean>;
  filterOpen: Animated.SharedValue<boolean>;
}

const timingConfig: Animated.WithTimingConfig = {
  duration: 500,
  easing: Easing.bezier(0.22, 1, 0.36, 1),
};

const ICON_SIZE = responsivePixelSize(24);

const Results: React.FC<ResultsProps> = ({ anyPickerOpen, filterOpen }) => {
  const {
    containerStyles,
    resultsInfoStyles,
    toggleFilterStyles,
    titleStyles,
    resultsCountStyles,
    buttonStyles,
  } = useStyles();

  const animatedStyle = useAnimatedStyle(() => {
    return {
      flex: withTiming(anyPickerOpen.value ? 0.2 : 6, timingConfig),
    };
  });

  const onPress = () => {
    filterOpen.value = !filterOpen.value;
  };

  return (
    <Animated.View style={[containerStyles, animatedStyle]}>
      <Box {...resultsInfoStyles}>
        <Text {...titleStyles}>Results</Text>
        <Box {...toggleFilterStyles}>
          <Text {...resultsCountStyles}>99 cars</Text>
          <RectButton style={buttonStyles} {...{ onPress }}>
            <FontAwesome5 name="sliders-h" size={ICON_SIZE} />
          </RectButton>
        </Box>
      </Box>
    </Animated.View>
  );
};

export default Results;
