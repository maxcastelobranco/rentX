import { ViewStyle } from "react-native";
import { useTheme } from "@shopify/restyle";

import responsivePixelSize from "../../../utils/responsivePixelSize";
import { Theme } from "../../../theme";

const ICON_SIZE = responsivePixelSize(40);

export const useStyles = () => {
  const theme = useTheme<Theme>();
  const ICON_CONTAINER_SIZE = ICON_SIZE + theme.spacing.s * 2;

  const containerStyles: ViewStyle = {
    width: ICON_CONTAINER_SIZE,
    height: ICON_CONTAINER_SIZE,
    alignItems: "center",
    justifyContent: "center",
  };

  return {
    containerStyles,
    ICON_SIZE,
  };
};
