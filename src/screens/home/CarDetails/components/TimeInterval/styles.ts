import { BoxProps, TextProps } from "@shopify/restyle";

import { Theme } from "../../../../../theme";

export const useStyles = () => {
  const containerStyles: BoxProps<Theme> = {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "backgroundLight1",
    paddingHorizontal: "l",
    paddingBottom: "s",
  };
  const labelStyles: TextProps<Theme> = {
    variant: "labelsMedium",
    marginBottom: "xs",
  };
  const dateStyles: TextProps<Theme> = {
    variant: "smallTextMediumDark",
  };

  return {
    containerStyles,
    labelStyles,
    dateStyles,
  };
};
