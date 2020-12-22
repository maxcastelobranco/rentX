import { TextStyle, ViewStyle } from "react-native";
import { useTheme } from "@shopify/restyle";

import responsivePixelSize from "../../../../../../../utils/responsivePixelSize";
import { Theme } from "../../../../../../../theme";

export const useStyles = () => {
  const theme = useTheme<Theme>();

  const containerStyles: ViewStyle = {
    flex: 1,
    alignItems: "center",
    padding: theme.spacing.xxs,
  };
  const dayStyles: TextStyle = {
    fontFamily: "Roboto-Regular",
    fontSize: responsivePixelSize(20),
  };

  return {
    containerStyles,
    dayStyles,
  };
};
