import { BoxProps, TextProps, useTheme } from "@shopify/restyle";
import { ViewStyle } from "react-native";

import { Theme } from "../../../../../../theme";

export const useStyles = () => {
  const theme = useTheme<Theme>();

  const containerStyles: ViewStyle = {
    backgroundColor: theme.colors.backgroundLight1,
    paddingHorizontal: theme.spacing.l,
    paddingVertical: theme.spacing.s,
  };
  const resultsInfoStyles: BoxProps<Theme> = {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  };
  const toggleFilterStyles: BoxProps<Theme> = {
    flexDirection: "row",
    alignItems: "center",
  };
  const titleStyles: TextProps<Theme> = {
    variant: "titleDarkSemiBold",
  };
  const resultsCountStyles: TextProps<Theme> = {
    variant: "smallTextMediumLight",
  };

  const buttonStyles: ViewStyle = {
    padding: theme.spacing.s,
    marginLeft: theme.spacing.s,
  };

  return {
    containerStyles,
    resultsInfoStyles,
    toggleFilterStyles,
    titleStyles,
    resultsCountStyles,
    buttonStyles,
  };
};
