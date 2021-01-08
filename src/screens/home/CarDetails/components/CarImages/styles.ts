import { BoxProps, useTheme } from "@shopify/restyle";
import { ViewStyle } from "react-native";

import { Theme } from "../../../../../theme";

export const useStyles = () => {
  const theme = useTheme<Theme>();
  const carListStyles: ViewStyle = {
    zIndex: -1,
    paddingTop: theme.spacing.l,
    backgroundColor: theme.colors.backgroundLight1,
  };
  const progressIndicatorContainerStyles: BoxProps<Theme> = {
    flexDirection: "row",
    position: "absolute",
    top: theme.spacing.ml,
    right: theme.spacing.ml,
  };

  return {
    carListStyles,
    progressIndicatorContainerStyles,
  };
};
