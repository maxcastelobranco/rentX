import { useTheme } from "@shopify/restyle";
import { ViewStyle } from "react-native";

import { Theme } from "../../theme";

export const useStyles = () => {
  const theme = useTheme<Theme>();
  const containerStyles: ViewStyle = {
    flex: 1,
    backgroundColor: theme.colors.backgroundDark1,
  };

  return {
    containerStyles,
  };
};
