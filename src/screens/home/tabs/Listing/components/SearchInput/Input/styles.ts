import { BoxProps, useTheme } from "@shopify/restyle";
import { TextStyle } from "react-native";

import { Theme } from "../../../../../../../theme";
import responsivePixelSize from "../../../../../../../utils/responsivePixelSize";

const INPUT_HEIGHT = responsivePixelSize(80);
const BORDER_WIDTH = 2;

export const useStyles = () => {
  const theme = useTheme<Theme>();

  const containerStyles: BoxProps<Theme> = {
    flexDirection: "row",
    borderWidth: BORDER_WIDTH,
    borderColor: "backgroundLight1",
  };

  const inputStyles: TextStyle = {
    flex: 1,
    paddingHorizontal: theme.spacing.s,
    fontFamily: "Roboto-Regular",
    color: theme.colors.textDark2,
    fontSize: responsivePixelSize(24),
  };
  const iconContainerStyles: BoxProps<Theme> = {
    width: INPUT_HEIGHT,
    height: INPUT_HEIGHT,
    alignItems: "center",
    justifyContent: "center",
    borderLeftWidth: 2,
    borderLeftColor: "backgroundLight1",
  };

  return {
    containerStyles,
    inputStyles,
    iconContainerStyles,
  };
};
