import { BoxProps } from "@shopify/restyle";

import { Theme } from "../../../../../../../../theme";

export const useStyles = () => {
  const containerStyles: BoxProps<Theme> = {
    paddingVertical: "s",
  };

  return {
    containerStyles,
  };
};
