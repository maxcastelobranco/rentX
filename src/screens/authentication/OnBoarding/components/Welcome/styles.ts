import { Dimensions, ViewStyle } from "react-native";
import { BoxProps, TextProps, useTheme } from "@shopify/restyle";

import { Theme } from "../../../../../theme";

const { width } = Dimensions.get("window");

export const useStyles = () => {
  const theme = useTheme<Theme>();

  const containerStyles: ViewStyle = {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    width,
    backgroundColor: theme.colors.backgroundDark1,
    paddingHorizontal: theme.spacing.l,
  };
  const titleStyles: TextProps<Theme> = {
    variant: "titleLightLargeSemiBold",
    marginBottom: "m",
  };
  const descriptionStyles: TextProps<Theme> = {
    variant: "regularTextMediumLight",
    marginBottom: "xxl",
  };
  const buttonsContainerStyles: BoxProps<Theme> = {
    marginTop: "xxl",
    flexDirection: "row",
  };
  const buttonTextStyles: TextProps<Theme> = {
    variant: "mediumTextMediumLight",
  };
  const buttonStyles: ViewStyle = {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: theme.spacing.l,
    paddingVertical: theme.spacing.m,
  };
  const loginButtonStyles: ViewStyle = {
    ...buttonStyles,
    backgroundColor: theme.colors.primary,
    marginRight: theme.spacing.xs,
  };
  const signUpButtonStyles: ViewStyle = {
    ...buttonStyles,
    backgroundColor: theme.colors.backgroundDark2,
    marginLeft: theme.spacing.xs,
  };
  const goBackButtonTextStyles: TextProps<Theme> = {
    variant: "smallTextMediumDark",
  };
  const goBackButtonStyles: ViewStyle = {
    paddingHorizontal: theme.spacing.l,
    paddingVertical: theme.spacing.m,
    margin: theme.spacing.l,
  };

  return {
    containerStyles,
    titleStyles,
    descriptionStyles,
    buttonsContainerStyles,
    buttonTextStyles,
    loginButtonStyles,
    signUpButtonStyles,
    goBackButtonTextStyles,
    goBackButtonStyles,
  };
};
