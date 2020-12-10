import { TextProps, useTheme } from "@shopify/restyle";
import { ViewStyle } from "react-native";

import { Theme } from "../../../theme";
import responsivePixelSize from "../../../utils/responsivePixelSize";

const ICON_SIZE = responsivePixelSize(40);

export const useStyles = () => {
  const theme = useTheme<Theme>();
  const ICON_CONTAINER_SIZE = ICON_SIZE + theme.spacing.s * 2;

  const containerStyles: ViewStyle = {
    flex: 1,
    backgroundColor: theme.colors.backgroundLight1,
    padding: theme.spacing.l,
  };
  const backButtonContainerStyles: ViewStyle = {
    width: ICON_CONTAINER_SIZE,
    height: ICON_CONTAINER_SIZE,
    alignItems: "center",
    justifyContent: "center",
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

  return {
    containerStyles,
    backButtonContainerStyles,
    titleStyles,
    descriptionStyles,
    ICON_SIZE,
  };
};
