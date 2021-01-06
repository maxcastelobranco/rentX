import { BoxProps, useTheme } from "@shopify/restyle";
import { ViewStyle } from "react-native";

import { Theme } from "../../../../../../../../../theme";
import { SLIDER_BUTTON_WIDTH } from "../../../../../../../../../components/svgs/static/SliderButton";

export const useStyles = (maxWidth: number) => {
  const theme = useTheme<Theme>();
  const containerStyles: BoxProps<Theme> = {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "s",
  };
  const sliderButtonContainerStyles: ViewStyle = {
    backgroundColor: theme.colors.backgroundLight1,
  };
  const redLineStyles: ViewStyle = {
    width: maxWidth - SLIDER_BUTTON_WIDTH * 2,
    height: 2,
    backgroundColor: theme.colors.primary,
    zIndex: -1,
  };
  const rightSideLineCoverStyles: BoxProps<Theme> = {
    width: maxWidth,
    backgroundColor: "backgroundLight1",
  };

  return {
    containerStyles,
    sliderButtonContainerStyles,
    redLineStyles,
    rightSideLineCoverStyles,
  };
};
