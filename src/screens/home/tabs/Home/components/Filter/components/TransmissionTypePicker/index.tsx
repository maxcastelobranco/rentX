import React from "react";
import { useTheme } from "@shopify/restyle";
import Animated, {
  Easing,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { Dimensions } from "react-native";

import { Box, Text, Theme } from "../../../../../../../../theme";

import { useStyles } from "./styles";
import Option from "./components/Option";
interface TransmissionTypePickerProps {
  selectedOptionIndex: number;
  setSelectedOptionIndex: React.Dispatch<React.SetStateAction<number>>;
  options: string[];
}
const { width } = Dimensions.get("window");

const timingConfig: Animated.WithTimingConfig = {
  duration: 750,
  easing: Easing.bezier(0.16, 1, 0.3, 1),
};

const TransmissionTypePicker: React.FC<TransmissionTypePickerProps> = ({
  selectedOptionIndex,
  setSelectedOptionIndex,
  options,
}) => {
  const {
    containerStyles,
    labelStyles,
    animatedBackgroundStyles,
  } = useStyles();
  const theme = useTheme<Theme>();

  const CONTAINER_SIZE = (width - theme.spacing.l * 2) / 2;

  const animatedBackgroundStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withTiming(
            CONTAINER_SIZE * selectedOptionIndex,
            timingConfig
          ),
        },
      ],
    };
  });

  return (
    <>
      <Text {...labelStyles}>Transmission</Text>
      <Box {...containerStyles}>
        {options.map((option, index) => (
          <Option
            key={option}
            {...{ option, index, selectedOptionIndex, setSelectedOptionIndex }}
          />
        ))}
        <Animated.View
          style={[animatedBackgroundStyles, animatedBackgroundStyle]}
        />
      </Box>
    </>
  );
};

export default TransmissionTypePicker;
