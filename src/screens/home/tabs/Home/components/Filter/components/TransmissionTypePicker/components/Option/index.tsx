import React from "react";
import Animated, {
  Easing,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from "react-native-reanimated";
import { RectButton } from "react-native-gesture-handler";
import { useTiming } from "react-native-redash";

import { Box } from "../../../../../../../../../../theme";
import { animateScale } from "../../../../../../../../../../utils/animateScale";

import { useStyles } from "./styles";

interface OptionProps {
  option: string;
  index: number;
  selectedOptionIndex: number;
  setSelectedOptionIndex: React.Dispatch<React.SetStateAction<number>>;
}

const timingConfig: Animated.WithTimingConfig = {
  duration: 750,
  easing: Easing.bezier(0.16, 1, 0.3, 1),
};

const Option: React.FC<OptionProps> = ({
  option,
  index,
  selectedOptionIndex,
  setSelectedOptionIndex,
}) => {
  const {
    containerStyles,
    overlaidOptionContainerStyles,
    focusedOptionStyles,
    optionStyles,
  } = useStyles();

  const onPress = () => {
    setSelectedOptionIndex(index);
  };
  const isFocused = selectedOptionIndex === index;
  const labelSize = option.length * 10;
  const opacity = useDerivedValue(() =>
    withTiming(isFocused ? 0 : 1, timingConfig)
  );
  const scale = useTiming(isFocused, timingConfig);
  const selectedTransition = useTiming(selectedOptionIndex, timingConfig);
  const isGoingLeft = useDerivedValue(
    () => selectedTransition.value > selectedOptionIndex
  );
  const animatedFocusedOptionStyle = useAnimatedStyle(() => {
    return {
      transform: isFocused
        ? isGoingLeft.value
          ? animateScale({ direction: "fromRight", size: labelSize, scale })
          : animateScale({ direction: "fromLeft", size: labelSize, scale })
        : isGoingLeft.value
        ? animateScale({ direction: "fromLeft", size: labelSize, scale })
        : animateScale({ direction: "fromRight", size: labelSize, scale }),
    };
  });

  const animatedOptionStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  return (
    <RectButton key={option} style={containerStyles} {...{ onPress }}>
      <Box {...overlaidOptionContainerStyles}>
        <Animated.Text
          style={[focusedOptionStyles, animatedFocusedOptionStyle]}
        >
          {option}
        </Animated.Text>
      </Box>
      <Box {...overlaidOptionContainerStyles}>
        <Animated.Text style={[optionStyles, animatedOptionStyle]}>
          {option}
        </Animated.Text>
      </Box>
    </RectButton>
  );
};

export default Option;
