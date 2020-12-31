import React from "react";
import { useDerivedValue, useSharedValue } from "react-native-reanimated";
import { ReText } from "react-native-redash";
import { FontAwesome } from "@expo/vector-icons";
import { useTheme } from "@shopify/restyle";

import { DailyRateType } from "../../../../hooks/useFilterBoilerplate";
import { Box, Text, Theme } from "../../../../../../../../theme";
import responsivePixelSize from "../../../../../../../../utils/responsivePixelSize";

import { useStyles } from "./styles";

interface DailyRateProps {
  dailyRate: DailyRateType;
  setDailyRate: React.Dispatch<React.SetStateAction<DailyRateType>>;
}

const ICON_SIZE = responsivePixelSize(16);

const DailyRate: React.FC<DailyRateProps> = ({ dailyRate: { from, to } }) => {
  const theme = useTheme<Theme>();
  const {
    containerStyles,
    textContainerStyles,
    dailyRateTextStyles,
    moneyContainerStyles,
    moneyStyles,
  } = useStyles();

  // const translateXLeft = useSharedValue(0);
  // const translateXRight = useSharedValue(0);
  const startValue = useSharedValue(from);
  const endValue = useSharedValue(to);
  const startValueText = useDerivedValue(() => `$${startValue.value}`);
  const endValueText = useDerivedValue(() => `$${endValue.value}`);

  return (
    <Box {...containerStyles}>
      <Box {...textContainerStyles}>
        <Text {...dailyRateTextStyles}>Daily Rate</Text>
        <Box {...moneyContainerStyles}>
          <ReText text={startValueText} style={moneyStyles} />
          <FontAwesome name="arrows-h" size={ICON_SIZE} color={theme.colors.primary} />
          <ReText text={endValueText} style={moneyStyles} />
        </Box>
      </Box>
    </Box>
  );
};

export default DailyRate;
