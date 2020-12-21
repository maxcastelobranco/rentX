import { ViewStyle } from "react-native";
import { useTheme } from "@shopify/restyle";

import { Theme } from "../../../../../../../theme";
import responsivePixelSize from "../../../../../../../utils/responsivePixelSize";

const FOCUS_INDICATOR_SIZE = responsivePixelSize(5);

export const useStyles = () => {
  const theme = useTheme<Theme>();
  const containerStyles: ViewStyle = {
    width: FOCUS_INDICATOR_SIZE,
    height: FOCUS_INDICATOR_SIZE,
    backgroundColor: theme.colors.primary,
  };

  return {
    containerStyles,
  };
};
