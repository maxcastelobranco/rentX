import React from "react";
import Animated, { useDerivedValue } from "react-native-reanimated";

import { Box } from "../../../../../../../../theme";

import { useStyles } from "./styles";
import TextData from "./TextData";
import Slider from "./Slider";

interface DailyRateProps {
  startValue: Animated.SharedValue<number>;
  endValue: Animated.SharedValue<number>;
}

const DailyRate: React.FC<DailyRateProps> = ({ startValue, endValue }) => {
  const { containerStyles } = useStyles();
  const startValueText = useDerivedValue(() => `$${startValue.value}`);
  const endValueText = useDerivedValue(() => `$${endValue.value}`);

  return (
    <Box {...containerStyles}>
      <TextData {...{ startValueText, endValueText }} />
      <Slider {...{ startValue, endValue }} />
    </Box>
  );
};

export default DailyRate;
