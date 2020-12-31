import { ViewStyle } from "react-native";
import { BoxProps, TextProps, useTheme } from "@shopify/restyle";

import { Theme } from "../../../../../../../../theme";

export const useStyles = () => {
  const theme = useTheme<Theme>();

  const closeFilterButtonStyles: ViewStyle = {
    height: 45,
    paddingVertical: theme.spacing.s,
  };
  const closeFilterStyles: BoxProps<Theme> = {
    width: 48,
    height: 4,
    backgroundColor: "textLight2",
    alignSelf: "center",
  };
  const filterTextContainerStyles: BoxProps<Theme> = {
    borderBottomColor: "textLight2",
    borderBottomWidth: 1,
    paddingBottom: "s",
  };
  const filterTextStyles: TextProps<Theme> = {
    variant: "titleDarkSemiBold",
    textAlign: "center",
  };

  return {
    closeFilterButtonStyles,
    closeFilterStyles,
    filterTextContainerStyles,
    filterTextStyles,
  };
};
