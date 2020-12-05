import { BoxProps, useTheme } from "@shopify/restyle";
import { Dimensions, ViewStyle } from "react-native";

import { Theme } from "../../../../../theme";

const { width } = Dimensions.get("window");

export const useStyles = () => {
  const theme = useTheme<Theme>();
  const containerStyles: BoxProps<Theme> = {
    width,
    position: "absolute",
    bottom: 0,
    backgroundColor: "backgroundLight1",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "m",
  };
  const progressIndicatorContainerStyles: BoxProps<Theme> = {
    flexDirection: "row",
  };
  const buttonStyles: ViewStyle = {
    padding: theme.spacing.s,
  };

  return {
    containerStyles,
    progressIndicatorContainerStyles,
    buttonStyles,
  };
};
