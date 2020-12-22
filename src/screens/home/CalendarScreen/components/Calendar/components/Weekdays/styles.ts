import { BoxProps, TextProps } from "@shopify/restyle";

import { Theme } from "../../../../../../../theme";

export const useStyles = () => {
  const containerStyles: BoxProps<Theme> = {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: "xs",
    borderBottomWidth: 2,
    borderBottomColor: "textLight2",
  };
  const weekdayStyles: TextProps<Theme> = {
    variant: "labelsLight",
  };

  return {
    containerStyles,
    weekdayStyles,
  };
};
