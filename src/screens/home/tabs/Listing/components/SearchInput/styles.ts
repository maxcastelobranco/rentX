import { BoxProps } from "@shopify/restyle";

import { Theme } from "../../../../../../theme";

export const useStyles = () => {
  const containerStyles: BoxProps<Theme> = {
    backgroundColor: "textLight1",
    marginHorizontal: "l",
    shadowColor: "backgroundDark3",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  };

  return {
    containerStyles,
  };
};
