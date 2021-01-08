import { BoxProps, TextProps, useTheme } from "@shopify/restyle";
import { ViewStyle } from "react-native";

import { Theme } from "../../../../../theme";

export const useStyles = () => {
  const theme = useTheme<Theme>();
  const containerStyles: BoxProps<Theme> = {
    backgroundColor: "textLight1",
    paddingVertical: "s",
    paddingHorizontal: "l",
  };
  const labelStyles: TextProps<Theme> = {
    variant: "labelsMedium",
    marginBottom: "xs",
  };
  const totalContainerStyles: BoxProps<Theme> = {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  };
  const totalDescriptionStyles: TextProps<Theme> = {
    variant: "smallTextMediumDark",
  };
  const totalStyles: TextProps<Theme> = {
    variant: "titleDarkSemiBold",
  };
  const buttonStyles: ViewStyle = {
    backgroundColor: theme.colors.primary,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: theme.spacing.xs,
    marginTop: theme.spacing.s,
  };
  const buttonTextStyles: TextProps<Theme> = {
    variant: "mediumTextLight",
  };

  return {
    containerStyles,
    labelStyles,
    totalContainerStyles,
    totalDescriptionStyles,
    totalStyles,
    buttonStyles,
    buttonTextStyles,
  };
};
