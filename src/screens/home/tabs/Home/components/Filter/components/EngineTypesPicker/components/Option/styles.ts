import { Dimensions, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { useTheme } from "@shopify/restyle";

import { Theme } from "../../../../../../../../../../theme";
import responsivePixelSize from "../../../../../../../../../../utils/responsivePixelSize";

const { width } = Dimensions.get("window");

export const useStyles = () => {
  const theme = useTheme<Theme>();
  const CONTAINER_SIZE = (width - theme.spacing.l * 2) / 3;

  const containerStyles: ViewStyle = {
    width: CONTAINER_SIZE,
    height: CONTAINER_SIZE,
  };
  const overlaidIconStyles: ViewStyle = {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: theme.spacing.m,
  };
  const overlaidLabelContainerStyles: ViewStyle = {
    position: "absolute",
    bottom: theme.spacing.s,
    left: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
  };
  const baseLabelStyles: TextStyle = {
    fontFamily: "Roboto-Medium",
    fontSize: responsivePixelSize(16),
    marginTop: theme.spacing.s,
    textTransform: "capitalize",
  };
  const focusedLabelStyles: TextStyle = {
    ...baseLabelStyles,
    color: theme.colors.textDark1,
  };
  const labelStyles: TextStyle = {
    ...baseLabelStyles,
    color: theme.colors.textMediumLight1,
  };

  return {
    containerStyles,
    overlaidIconStyles,
    overlaidLabelContainerStyles,
    focusedLabelStyles,
    labelStyles,
  };
};
