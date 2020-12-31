import React from "react";
import { useDerivedValue, useSharedValue } from "react-native-reanimated";

import { DailyRateType } from "../../../../hooks/useFilterBoilerplate";
import { Box } from "../../../../../../../../theme";

import { useStyles } from "./styles";
import TextData from "./TextData";
import Slider from "./Slider";

interface DailyRateProps {
  dailyRate: DailyRateType;
}

const DailyRate: React.FC<DailyRateProps> = ({ dailyRate: { from, to } }) => {
  const { containerStyles } = useStyles();
  const startValue = useSharedValue(from);
  const endValue = useSharedValue(to);
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
