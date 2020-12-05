import { BoxProps, TextProps, useTheme } from "@shopify/restyle";
import { Dimensions, ViewStyle } from "react-native";

import { Theme } from "../../../../../theme";

const { width, height } = Dimensions.get("window");

export const useStyles = () => {
  const theme = useTheme<Theme>();
  const containerStyles: ViewStyle = {
    width,
    height,
    backgroundColor: theme.colors.backgroundLight1,
    paddingHorizontal: theme.spacing.l,
    paddingVertical: theme.spacing.xxl,
  };

  const headerStyles: BoxProps<Theme> = {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: "xxl",
  };
  const numerationStyles: TextProps<Theme> = {
    variant: "onBoardingNumeration",
  };
  const titleStyles: TextProps<Theme> = {
    variant: "titleDarkLargeBold",
    marginBottom: "ml",
  };
  const descriptionStyles: TextProps<Theme> = {
    variant: "regularTextDark",
  };

  return {
    containerStyles,
    headerStyles,
    numerationStyles,
    titleStyles,
    descriptionStyles,
  };
};
