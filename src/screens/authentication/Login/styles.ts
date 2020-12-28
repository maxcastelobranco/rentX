import { TextProps, useTheme } from "@shopify/restyle";
import { ViewStyle } from "react-native";

import { Theme } from "../../../theme";

export const useStyles = () => {
  const theme = useTheme<Theme>();
  const containerStyles: ViewStyle = {
    flex: 1,
    backgroundColor: theme.colors.backgroundLight1,
    padding: theme.spacing.l,
  };
  const titleStyles: TextProps<Theme> = {
    variant: "titleDarkLargeSemiBold",
    marginTop: "l",
  };
  const descriptionStyles: TextProps<Theme> = {
    variant: "regularTextDark",
    marginTop: "m",
    marginBottom: "xl",
  };
  const notificationPosition = {
    top: theme.spacing.s,
    right: theme.spacing.s,
  };

  return {
    containerStyles,
    titleStyles,
    descriptionStyles,
    notificationPosition,
  };
};
