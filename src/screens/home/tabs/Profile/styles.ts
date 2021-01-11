import { BoxProps, TextProps, useTheme } from "@shopify/restyle";
import { ViewStyle } from "react-native";

import { Theme } from "../../../../theme";

export const useStyles = () => {
  const theme = useTheme<Theme>();
  const containerStyles: BoxProps<Theme> = {
    flex: 1,
    backgroundColor: "backgroundDark1",
  };
  const contentContainerStyles: ViewStyle = {
    zIndex: -1,
    backgroundColor: theme.colors.backgroundLight1,
  };

  const userNameStyles: TextProps<Theme> = {
    variant: "titleDarkLargeBold",
    textAlign: "center",
    marginTop: "s",
  };

  return {
    containerStyles,
    contentContainerStyles,
    userNameStyles,
  };
};
