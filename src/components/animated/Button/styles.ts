import { ViewStyle } from "react-native";
import { TextProps, useTheme } from "@shopify/restyle";

import { Theme } from "../../../theme";
import responsivePixelSize from "../../../utils/responsivePixelSize";

export const useStyles = () => {
  const theme = useTheme<Theme>();

  const containerStyles: ViewStyle = {
    height: responsivePixelSize(56),
    backgroundColor: theme.colors.primary,
    marginVertical: theme.spacing.s,
  };
  const buttonStyles: ViewStyle = {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: theme.spacing.s,
  };
  const labelStyles: TextProps<Theme> = {
    variant: "mediumTextLight",
  };

  return {
    containerStyles,
    buttonStyles,
    labelStyles,
  };
};
