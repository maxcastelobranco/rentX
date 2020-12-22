import { ViewStyle } from "react-native";
import { BoxProps, useTheme } from "@shopify/restyle";

import { Theme } from "../../../../../theme";

export const useStyles = () => {
  const theme = useTheme<Theme>();

  const containerStyles: ViewStyle = {
    backgroundColor: theme.colors.backgroundLight1,
    paddingHorizontal: theme.spacing.l,
    paddingVertical: theme.spacing.m,
  };
  const rowStyles: BoxProps<Theme> = {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: "xs",
  };

  return {
    containerStyles,
    rowStyles,
  };
};
