import { Dimensions } from "react-native";
import { BoxProps, TextProps } from "@shopify/restyle";

import { Theme } from "../../../../theme";

const { width } = Dimensions.get("window");

export const useStyles = () => {
  const containerStyles: BoxProps<Theme> = {
    width,
    padding: "l",
  };
  const slideTitleStyles: TextProps<Theme> = {
    variant: "titleDarkSemiBold",
    marginBottom: "s",
  };

  return {
    containerStyles,
    slideTitleStyles,
  };
};
