import { BoxProps } from "@shopify/restyle";

import { Theme } from "../../../../../theme";

import { TAB_BAR_HEIGHT } from "./constants";

export const useStyles = () => {
  const containerStyles: BoxProps<Theme> = {
    flexDirection: "row",
    height: TAB_BAR_HEIGHT,
    backgroundColor: "backgroundLight1",
  };

  return {
    containerStyles,
  };
};
