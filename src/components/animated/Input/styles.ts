import { BoxProps, useTheme } from "@shopify/restyle";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";

import { Theme } from "../../../theme";
import responsivePixelSize from "../../../utils/responsivePixelSize";

export const INPUT_HEIGHT = responsivePixelSize(80);

export const useStyles = () => {
  const theme = useTheme<Theme>();

  const containerStyles: BoxProps<Theme> = {
    flexDirection: "row",
    height: INPUT_HEIGHT,
    width: "100%",
  };
  const iconContainerStyles: ViewStyle = {
    width: INPUT_HEIGHT,
    marginRight: theme.spacing.xxs,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.backgroundLight2,
  };
  const inputContainerStyles: ViewStyle = {
    flex: 1,
    backgroundColor: theme.colors.backgroundLight2,
  };
  const inputStyles: TextStyle = {
    ...StyleSheet.absoluteFillObject,
    top: theme.spacing.xs,
    paddingLeft: theme.spacing.s,
    fontFamily: "Roboto-Regular",
    color: theme.colors.textDark2,
    fontSize: responsivePixelSize(24),
  };
  const secureTextEntryStyles: ViewStyle = {
    position: "absolute",
    top: 0,
    right: 0,
    height: INPUT_HEIGHT,
    width: INPUT_HEIGHT,
    alignItems: "center",
    justifyContent: "center",
  };

  return {
    containerStyles,
    iconContainerStyles,
    inputContainerStyles,
    inputStyles,
    secureTextEntryStyles,
  };
};
