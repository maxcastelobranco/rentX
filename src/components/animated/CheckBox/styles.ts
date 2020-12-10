import { StyleSheet, ViewStyle } from "react-native";
import { BoxProps, TextProps, useTheme } from "@shopify/restyle";

import { Theme } from "../../../theme";
import responsivePixelSize from "../../../utils/responsivePixelSize";

const CHECKBOX_SIZE = responsivePixelSize(20);

export const useStyles = () => {
  const theme = useTheme<Theme>();

  const containerStyles: ViewStyle = {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: theme.spacing.s,
    paddingHorizontal: theme.spacing.s,
    marginTop: theme.spacing.s,
  };
  const checkBoxStyles: BoxProps<Theme> = {
    width: CHECKBOX_SIZE,
    height: CHECKBOX_SIZE,
    backgroundColor: "backgroundDark3",
    overflow: "hidden",
  };
  const innerCheckBoxStyles: ViewStyle = {
    ...StyleSheet.absoluteFillObject,
    width: CHECKBOX_SIZE,
    height: CHECKBOX_SIZE,
    backgroundColor: theme.colors.backgroundLight2,
  };
  const textStyles: TextProps<Theme> = {
    variant: "regularTextDark",
    marginLeft: "s",
  };

  return {
    containerStyles,
    checkBoxStyles,
    innerCheckBoxStyles,
    textStyles,
  };
};
