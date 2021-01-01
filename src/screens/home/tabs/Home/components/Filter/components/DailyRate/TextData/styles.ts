import { BoxProps, TextProps, useTheme } from "@shopify/restyle";
import { TextStyle } from "react-native";

import responsivePixelSize from "../../../../../../../../../utils/responsivePixelSize";
import { Theme } from "../../../../../../../../../theme";

export const useStyles = () => {
  const theme = useTheme<Theme>();

  const containerStyles: BoxProps<Theme> = {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  };
  const moneyContainerStyles: BoxProps<Theme> = {
    flexDirection: "row",
    alignItems: "center",
  };
  const dailyRateTextStyles: TextProps<Theme> = {
    variant: "smallTextMediumDark",
  };
  const moneyStyles: TextStyle = {
    fontFamily: "Roboto-Bold",
    fontSize: responsivePixelSize(16),
    color: theme.colors.primary,
    marginHorizontal: theme.spacing.xs,
  };

  return {
    containerStyles,
    moneyContainerStyles,
    dailyRateTextStyles,
    moneyStyles,
  };
};
