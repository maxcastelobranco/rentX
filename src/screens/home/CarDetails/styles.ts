import { useTheme } from "@shopify/restyle";
import { ViewStyle } from "react-native";

import { Theme } from "../../../theme";

export const useStyles = () => {
  const theme = useTheme<Theme>();

  const goBackButtonStyles: ViewStyle = {
    padding: theme.spacing.s,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: theme.spacing.s,
    left: theme.spacing.s,
  };

  return { goBackButtonStyles };
};
