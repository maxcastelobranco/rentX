import { BoxProps, TextProps, useTheme } from "@shopify/restyle";
import { ViewStyle } from "react-native";

import { Theme } from "../../../../../../../theme";

export const useStyles = () => {
  const theme = useTheme<Theme>();

  const containerStyles: BoxProps<Theme> = {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  };
  const currentMonthStyles: TextProps<Theme> = {
    variant: "titleDarkSemiBold",
  };
  const chevronsContainerStyles: BoxProps<Theme> = {
    flexDirection: "row",
  };
  const chevronStyles: ViewStyle = {
    padding: theme.spacing.s,
  };

  return {
    containerStyles,
    currentMonthStyles,
    chevronsContainerStyles,
    chevronStyles,
  };
};
