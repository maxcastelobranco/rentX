import React from "react";
import { ReText } from "react-native-redash";
import { FontAwesome } from "@expo/vector-icons";
import Animated from "react-native-reanimated";
import { useTheme } from "@shopify/restyle";

import { Box, Text, Theme } from "../../../../../../../../../theme";
import responsivePixelSize from "../../../../../../../../../utils/responsivePixelSize";

import { useStyles } from "./styles";

interface TextDataProps {
  startValueText: Animated.SharedValue<string>;
  endValueText: Animated.SharedValue<string>;
}

const ICON_SIZE = responsivePixelSize(16);

const TextData: React.FC<TextDataProps> = ({ startValueText, endValueText }) => {
  const theme = useTheme<Theme>();
  const { containerStyles, dailyRateTextStyles, moneyContainerStyles, moneyStyles } = useStyles();

  return (
    <Box {...containerStyles}>
      <Text {...dailyRateTextStyles}>Daily Rate</Text>
      <Box {...moneyContainerStyles}>
        <ReText text={startValueText} style={moneyStyles} />
        <FontAwesome name="arrows-h" size={ICON_SIZE} color={theme.colors.primary} />
        <ReText text={endValueText} style={moneyStyles} />
      </Box>
    </Box>
  );
};

export default TextData;
