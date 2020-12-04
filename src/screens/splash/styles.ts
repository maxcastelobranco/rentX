import { BoxProps } from "@shopify/restyle";
import { Dimensions, ViewStyle } from "react-native";

import { Theme } from "../../theme";

const { height } = Dimensions.get("window");

export const useStyles = () => {
  const containerStyles: BoxProps<Theme> = {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "backgroundDark1",
  };
  const svgStyles: ViewStyle = {
    position: "absolute",
    top: height / 2,
    bottom: height / 2,
  };

  return {
    containerStyles,
    svgStyles,
  };
};
