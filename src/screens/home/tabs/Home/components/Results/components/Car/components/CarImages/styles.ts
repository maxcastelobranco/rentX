import { BoxProps, useTheme } from "@shopify/restyle";
import { ViewStyle } from "react-native";

import { Theme } from "../../../../../../../../../../theme";

export const useStyles = () => {
  const theme = useTheme<Theme>();
  const carListStyles: ViewStyle = {
    zIndex: -1,
  };
  const progressIndicatorContainerStyles: BoxProps<Theme> = {
    flexDirection: "row",
    position: "absolute",
    bottom: theme.spacing.s,
    right: theme.spacing.s,
  };

  return {
    carListStyles,
    progressIndicatorContainerStyles,
  };
};
