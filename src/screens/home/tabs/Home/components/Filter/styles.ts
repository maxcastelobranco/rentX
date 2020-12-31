import { useTheme } from "@shopify/restyle";
import { Dimensions, ViewStyle } from "react-native";

import responsivePixelSize from "../../../../../../utils/responsivePixelSize";
import { Theme } from "../../../../../../theme";

const { height, width } = Dimensions.get("window");

export const SHEET_HEIGHT = height * 0.9;

export const useStyles = () => {
  const theme = useTheme<Theme>();

  const containerStyles: ViewStyle = {
    position: "absolute",
    bottom: 0,
    height: SHEET_HEIGHT,
    width,
    paddingHorizontal: theme.spacing.l,
    borderRadius: responsivePixelSize(24),
    backgroundColor: theme.colors.backgroundLight1,
    shadowColor: theme.colors.backgroundDark3,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  };

  return {
    containerStyles,
  };
};
