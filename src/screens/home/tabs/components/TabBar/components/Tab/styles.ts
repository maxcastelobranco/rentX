import { StyleSheet, ViewStyle } from "react-native";
import { BoxProps } from "@shopify/restyle";

import { Theme } from "../../../../../../../theme";

export const useStyles = () => {
  const tabStyles: ViewStyle = {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  };
  const overlaidIconStyles: BoxProps<Theme> = {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "center",
  };

  return {
    tabStyles,
    overlaidIconStyles,
  };
};
