import React from "react";
import { RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "@shopify/restyle";

import responsivePixelSize from "../../../../../../../utils/responsivePixelSize";
import { Box, Text, Theme } from "../../../../../../../theme";

import { useStyles } from "./styles";

interface HeaderProps {
  addOneMonth(): void;
  subtractOneMonth(): void;
  formattedCurrentMonth: string;
}

const ICON_SIZE = responsivePixelSize(24);

const CurrentMonth: React.FC<HeaderProps> = ({
  addOneMonth,
  subtractOneMonth,
  formattedCurrentMonth,
}) => {
  const theme = useTheme<Theme>();
  const {
    containerStyles,
    currentMonthStyles,
    chevronsContainerStyles,
    chevronStyles,
  } = useStyles();

  return (
    <Box {...containerStyles}>
      <Text {...currentMonthStyles}>{formattedCurrentMonth}</Text>
      <Box {...chevronsContainerStyles}>
        <RectButton style={chevronStyles} onPress={subtractOneMonth}>
          <Feather
            name="chevron-left"
            size={ICON_SIZE}
            color={theme.colors.textDark2}
          />
        </RectButton>
        <RectButton style={chevronStyles} onPress={addOneMonth}>
          <Feather
            name="chevron-right"
            size={ICON_SIZE}
            color={theme.colors.textDark2}
          />
        </RectButton>
      </Box>
    </Box>
  );
};

export default CurrentMonth;
