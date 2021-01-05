import { BoxProps, useTheme } from "@shopify/restyle";
import { TextStyle, ViewStyle } from "react-native";

import { Theme } from "../../../../../../../theme";
import responsivePixelSize from "../../../../../../../utils/responsivePixelSize";

const BORDER_WIDTH = 2;

export const useStyles = () => {
  const theme = useTheme<Theme>();

  const SUGGESTION_LINE_HEIGHT = responsivePixelSize(20);
  const SUGGESTION_CONTAINER_HEIGHT =
    SUGGESTION_LINE_HEIGHT + BORDER_WIDTH * 2 + theme.spacing.s * 2;
  const MAX_SCROLL_VIEW_HEIGHT = SUGGESTION_CONTAINER_HEIGHT * 5;

  const scrollViewStyles: ViewStyle = {
    maxHeight: MAX_SCROLL_VIEW_HEIGHT,
  };
  const suggestionContainerStyles: BoxProps<Theme> = {
    flexDirection: "row",
    paddingVertical: "s",
    borderTopWidth: 0,
    borderWidth: BORDER_WIDTH,
    borderColor: "backgroundLight1",
  };
  const suggestionStyles: TextStyle = {
    fontFamily: "Roboto-Regular",
    color: theme.colors.textDark2,
    fontSize: responsivePixelSize(16),
    lineHeight: SUGGESTION_LINE_HEIGHT,
  };

  return {
    scrollViewStyles,
    suggestionContainerStyles,
    suggestionStyles,
  };
};
