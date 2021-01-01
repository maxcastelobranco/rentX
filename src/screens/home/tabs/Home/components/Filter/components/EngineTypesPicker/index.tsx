import React from "react";
import Animated, {
  Easing,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { Dimensions } from "react-native";
import { useTheme } from "@shopify/restyle";

import { Box, Text, Theme } from "../../../../../../../../theme";
import { EngineTypes } from "../../../../hooks/useFilterBoilerplate";
import { EngineTypeIconProps } from "../../../../../../../../components/svgs/static/engineTypes/types";

import { useStyles } from "./styles";
import Option from "./components/Option";

interface EngineTypesPickerProps {
  selectedOptionIndex: number;
  setSelectedOptionIndex: React.Dispatch<React.SetStateAction<number>>;
  options: {
    type: EngineTypes;
    Icon: React.FC<EngineTypeIconProps>;
    iconSize: number;
  }[];
}

const { width } = Dimensions.get("window");

const timingConfig: Animated.WithTimingConfig = {
  duration: 750,
  easing: Easing.bezier(0.16, 1, 0.3, 1),
};

const EngineTypesPicker: React.FC<EngineTypesPickerProps> = ({
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
  const CONTAINER_SIZE = (width - theme.spacing.l * 2) / 3;
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
      <Text {...labelStyles}>Engine Type</Text>
      <Box {...containerStyles}>
        {options.map(({ type, Icon, iconSize }, index) => (
          <Option
            key={type}
            {...{
              type,
              Icon,
              iconSize,
              index,
              selectedOptionIndex,
              setSelectedOptionIndex,
            }}
          />
        ))}
        <Animated.View
          style={[animatedBackgroundStyles, animatedBackgroundStyle]}
        />
      </Box>
    </>
  );
};

export default EngineTypesPicker;
