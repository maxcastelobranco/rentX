import { BoxProps, TextProps } from "@shopify/restyle";

import { Theme } from "../../../theme";

export const useStyles = () => {
  const containerStyles: BoxProps<Theme> = {
    flex: 1,
    backgroundColor: "backgroundDark1",
    padding: "l",
  };
  const titleStyles: TextProps<Theme> = {
    variant: "titleLightLargeSemiBold",
    marginBottom: "l",
  };
  const datePickerContainerStyles: BoxProps<Theme> = {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  };

  return {
    containerStyles,
    titleStyles,
    datePickerContainerStyles,
  };
};
