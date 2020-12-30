import { useTheme } from "@shopify/restyle";
import { ViewStyle } from "react-native";

import { Theme } from "../../../../../../../../theme";
import { CAR_ITEM_HEIGHT } from "../../constants";

export const useStyles = () => {
  const theme = useTheme<Theme>();

  const containerStyles: ViewStyle = {
    height: CAR_ITEM_HEIGHT,
    backgroundColor: theme.colors.backgroundLight1,
    marginVertical: theme.spacing.s,
  };
  const iconStyles: ViewStyle = {
    position: "absolute",
    bottom: theme.spacing.s,
    left: theme.spacing.s,
  };

  return {
    containerStyles,
    iconStyles,
  };
};
