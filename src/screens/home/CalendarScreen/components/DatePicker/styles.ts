import { BoxProps, TextProps, useTheme } from "@shopify/restyle";
import { Dimensions, ViewStyle } from "react-native";

import { Theme } from "../../../../../theme";

const { width, height } = Dimensions.get("window");

const SLIDER_CONTAINER_HEIGHT = height * 0.4;

export const useStyles = () => {
  const theme = useTheme<Theme>();

  const SLIDER_CONTAINER_WIDTH = width - theme.spacing.l * 2;

  const containerStyles: ViewStyle = {
    padding: theme.spacing.xs,
  };
  const labelStyles: TextProps<Theme> = {
    variant: "labelsMedium",
    marginBottom: "xs",
  };
  const dateStyles: TextProps<Theme> = {
    variant: "smallTextLight",
  };
  const underlineStyles: BoxProps<Theme> = {
    width: "100%",
    height: 2,
    backgroundColor: "backgroundDark2",
  };
  const sliderContainerStyles: ViewStyle = {
    position: "absolute",
    alignItems: "center",
    justifyContent: "space-between",
    width: SLIDER_CONTAINER_WIDTH,
    height: SLIDER_CONTAINER_HEIGHT,
    backgroundColor: theme.colors.backgroundLight1,
    padding: theme.spacing.m,
  };
  const extraContainerStyles: ViewStyle = {
    marginTop: theme.spacing.m,
  };
  const extraButtonStyles: ViewStyle = {
    width: SLIDER_CONTAINER_WIDTH - theme.spacing.l * 2,
  };

  return {
    containerStyles,
    labelStyles,
    dateStyles,
    underlineStyles,
    sliderContainerStyles,
    extraContainerStyles,
    extraButtonStyles,
  };
};
