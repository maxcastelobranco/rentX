import { BoxProps } from "@shopify/restyle";

import { Theme } from "../../../../../theme";

import { TAB_BAR_HEIGHT } from "./constants";

export const useStyles = () => {
  const containerStyles: BoxProps<Theme> = {
    flexDirection: "row",
    height: TAB_BAR_HEIGHT,
    backgroundColor: "backgroundLight1",
    // TODO: SHADOW STUFF
    shadowColor: "backgroundDark3",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  };

  return {
    containerStyles,
  };
};
