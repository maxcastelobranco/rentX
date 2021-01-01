import { BoxProps, TextProps, useTheme } from "@shopify/restyle";
import { Dimensions, ViewStyle } from "react-native";

import { Theme } from "../../../../../../../../theme";

const { width } = Dimensions.get("window");
export const useStyles = () => {
  const theme = useTheme<Theme>();
  const OPTION_CONTAINER_WIDTH = (width - theme.spacing.l * 2) / 2;
  const OPTION_CONTAINER_HEIGHT = OPTION_CONTAINER_WIDTH / 2;
  const ANIMATED_BACKGROUND_WIDTH =
    OPTION_CONTAINER_WIDTH - theme.spacing.xs * 2;
  const ANIMATED_BACKGROUND_HEIGHT =
    OPTION_CONTAINER_HEIGHT - theme.spacing.xs * 2;

  const containerStyles: BoxProps<Theme> = {
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "textLight1",
  };
  const labelStyles: TextProps<Theme> = {
    variant: "smallTextMediumDark",
    marginBottom: "s",
  };
  const animatedBackgroundStyles: ViewStyle = {
    position: "absolute",
    top: theme.spacing.xs,
    left: theme.spacing.xs,
    width: ANIMATED_BACKGROUND_WIDTH,
    height: ANIMATED_BACKGROUND_HEIGHT,
    backgroundColor: theme.colors.backgroundLight1,
    zIndex: -1,
  };

  return {
    containerStyles,
    labelStyles,
    animatedBackgroundStyles,
  };
};
