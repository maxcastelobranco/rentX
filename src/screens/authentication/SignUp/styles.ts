import { BoxProps, TextProps, useTheme } from "@shopify/restyle";
import { ViewStyle } from "react-native";

import { Theme } from "../../../theme";

export const useStyles = () => {
  const theme = useTheme<Theme>();

  const containerStyles: ViewStyle = {
    flex: 1,
    backgroundColor: theme.colors.backgroundLight1,
    paddingTop: theme.spacing.l,
  };
  const headerStyles: BoxProps<Theme> = {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "backgroundLight1",
    paddingHorizontal: "l",
    marginBottom: "l",
  };
  const progressIndicatorContainerStyles: BoxProps<Theme> = {
    flexDirection: "row",
  };
  const titleStyles: TextProps<Theme> = {
    variant: "titleDarkLargeSemiBold",
    marginTop: "l",
    paddingHorizontal: "l",
  };
  const descriptionStyles: TextProps<Theme> = {
    variant: "regularTextDark",
    marginTop: "m",
    marginBottom: "l",
    paddingHorizontal: "l",
  };

  return {
    containerStyles,
    headerStyles,
    progressIndicatorContainerStyles,
    titleStyles,
    descriptionStyles,
  };
};
