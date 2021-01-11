import { BoxProps, TextProps, useTheme } from "@shopify/restyle";
import { Dimensions, ViewStyle } from "react-native";

import { Theme } from "../../../theme";

const { width } = Dimensions.get("window");

export const useStyles = () => {
  const theme = useTheme<Theme>();
  const containerStyles: BoxProps<Theme> = {
    flex: 1,
    backgroundColor: "backgroundDark1",
    paddingVertical: "l",
    alignItems: "center",
  };
  const iconStyles: ViewStyle = {
    marginTop: theme.spacing.l,
  };
  const titleStyles: TextProps<Theme> = {
    marginTop: "ml",
    variant: "titleLightLargeSemiBold",
    textAlign: "center",
  };
  const descriptionStyles: TextProps<Theme> = {
    marginTop: "xs",
    variant: "regularTextDark",
    marginBottom: "l",
    textAlign: "center",
  };
  const buttonStyles: ViewStyle = {
    backgroundColor: theme.colors.backgroundDark2,
    padding: theme.spacing.m,
    alignItems: "center",
    justifyContent: "center",
  };
  const buttonTextStyles: TextProps<Theme> = {
    variant: "regularTextMediumLight",
  };
  const yesOrNoStyles: BoxProps<Theme> = {
    width,
    paddingHorizontal: "xxl",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  };

  return {
    containerStyles,
    iconStyles,
    titleStyles,
    descriptionStyles,
    buttonStyles,
    buttonTextStyles,
    yesOrNoStyles,
  };
};
