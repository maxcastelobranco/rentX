import { Dimensions, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { useTheme } from "@shopify/restyle";

import responsivePixelSize from "../../../../../../../../../../utils/responsivePixelSize";
import { Theme } from "../../../../../../../../../../theme";

const { width } = Dimensions.get("window");

export const useStyles = () => {
  const theme = useTheme<Theme>();
  const OPTION_CONTAINER_WIDTH = (width - theme.spacing.l * 2) / 2;
  const OPTION_CONTAINER_HEIGHT = OPTION_CONTAINER_WIDTH / 2;

  const containerStyles: ViewStyle = {
    width: OPTION_CONTAINER_WIDTH,
    height: OPTION_CONTAINER_HEIGHT,
  };
  const overlaidOptionContainerStyles = {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "center",
  };
  const baseOptionStyles: TextStyle = {
    fontFamily: "Roboto-Medium",
    fontSize: responsivePixelSize(16),
    marginTop: theme.spacing.s,
    textTransform: "capitalize",
  };
  const focusedOptionStyles: TextStyle = {
    ...baseOptionStyles,
    color: theme.colors.textDark1,
  };
  const optionStyles: TextStyle = {
    ...baseOptionStyles,
    color: theme.colors.textMediumLight1,
  };

  return {
    containerStyles,
    overlaidOptionContainerStyles,
    focusedOptionStyles,
    optionStyles,
  };
};
