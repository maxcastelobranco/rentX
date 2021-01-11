import { BoxProps, TextProps } from "@shopify/restyle";

import { Theme } from "../../../../../../theme";

export const useStyles = () => {
  const containerStyles: BoxProps<Theme> = {
    flex: 1,
    backgroundColor: "backgroundDark1",
    paddingTop: "l",
    paddingHorizontal: "l",
  };
  const buttonsContainerStyles: BoxProps<Theme> = {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  };
  const titleStyles: TextProps<Theme> = {
    variant: "mediumTextLight",
    marginBottom: "ml",
  };

  return {
    containerStyles,
    buttonsContainerStyles,
    titleStyles,
  };
};
