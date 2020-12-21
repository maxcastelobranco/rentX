import { BoxProps } from "@shopify/restyle";

import { OPTION_HEIGHT, VISIBLE_ITEMS } from "../../constants";
import { Theme } from "../../../../../../../theme";

export const useStyles = () => {
  const containerStyles: BoxProps<Theme> = {
    height: OPTION_HEIGHT * VISIBLE_ITEMS,
    overflow: "hidden",
  };

  return {
    containerStyles,
  };
};
