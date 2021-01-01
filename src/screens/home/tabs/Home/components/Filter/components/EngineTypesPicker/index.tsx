import React, { useState } from "react";
import Animated, {
  Easing,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { Dimensions } from "react-native";
import { useTheme } from "@shopify/restyle";

import { Box, Text, Theme } from "../../../../../../../../theme";
import { EngineTypes } from "../../../../hooks/useFilterBoilerplate";
import Gas from "../../../../../../../../components/svgs/static/engineTypes/Gas";
import Electric from "../../../../../../../../components/svgs/static/engineTypes/Electric";
import Hybrid from "../../../../../../../../components/svgs/static/engineTypes/Hybrid";

import { useStyles } from "./styles";
import Option from "./components/Option";

const { width } = Dimensions.get("window");
const options = [
  {
    type: EngineTypes.gas,
    Icon: Gas,
    iconSize: 24,
  },
  {
    type: EngineTypes.electric,
    Icon: Electric,
    iconSize: 24,
  },
  {
    type: EngineTypes.hybrid,
    Icon: Hybrid,
    iconSize: 36,
  },
];

const timingConfig: Animated.WithTimingConfig = {
  duration: 750,
  easing: Easing.bezier(0.16, 1, 0.3, 1),
};

const EngineTypesPicker: React.FC = () => {
  const {
    containerStyles,
    labelStyles,
    animatedBackgroundStyles,
  } = useStyles();

  const theme = useTheme<Theme>();
  const CONTAINER_SIZE = (width - theme.spacing.l * 2) / 3;
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
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
