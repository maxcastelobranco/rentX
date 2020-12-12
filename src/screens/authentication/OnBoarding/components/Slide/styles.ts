import { BoxProps, useTheme } from "@shopify/restyle";
import { Dimensions, TextStyle, ViewStyle } from "react-native";

import { Theme } from "../../../../../theme";
import responsivePixelSize from "../../../../../utils/responsivePixelSize";

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

  const numerationStyles: TextStyle = {
    fontFamily: "Archivo-Bold",
    color: theme.colors.textLight2,
    fontSize: responsivePixelSize(72),
  };

  const titleStyles: TextStyle = {
    fontFamily: "Archivo-Bold",
    color: theme.colors.textDark1,
    fontSize: responsivePixelSize(48),
  };

  const descriptionStyles: TextStyle = {
    fontFamily: "Roboto-Regular",
    color: theme.colors.textDark2,
    fontSize: responsivePixelSize(24),
    lineHeight: responsivePixelSize(30),
  };

  return {
    containerStyles,
    headerStyles,
    numerationStyles,
    titleStyles,
    descriptionStyles,
  };
};
