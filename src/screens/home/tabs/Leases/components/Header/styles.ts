import { BoxProps, TextProps } from "@shopify/restyle";

import { Theme } from "../../../../../../theme";

export const useStyles = () => {
  const containerStyles: BoxProps<Theme> = {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "backgroundDark1",
    padding: "l",
  };
  const titleStyles: TextProps<Theme> = {
    variant: "titleLightSemiBold",
  };
  const numberOfCarsStyles: TextProps<Theme> = {
    variant: "smallTextMediumDark",
  };

  return {
    containerStyles,
    titleStyles,
    numberOfCarsStyles,
  };
};
