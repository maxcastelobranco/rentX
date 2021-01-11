import { TextProps, useTheme } from "@shopify/restyle";
import { Dimensions, ImageStyle, StyleSheet, ViewStyle } from "react-native";

import { Theme } from "../../../../../../../../theme";
import responsivePixelSize from "../../../../../../../../utils/responsivePixelSize";

const { width } = Dimensions.get("window");

const CAR_ITEM_HEIGHT = responsivePixelSize(150);

export const useStyles = () => {
  const theme = useTheme<Theme>();
  const CAR_ITEM_WIDTH = width - theme.spacing.l * 2;

  const containerStyles: ViewStyle = {
    height: CAR_ITEM_HEIGHT,
    width: CAR_ITEM_WIDTH,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "backgroundLight1",
    marginVertical: "s",
    padding: "s",
    alignSelf: "center",
  };
  const iconStyles: ViewStyle = {
    position: "absolute",
    bottom: theme.spacing.xs,
    right: theme.spacing.xs,
  };
  const imageStyles: ImageStyle = {
    ...StyleSheet.absoluteFillObject,
    right: theme.spacing.xxs,
    left: CAR_ITEM_WIDTH / 3,
  };
  const labelStyles: TextProps<Theme> = {
    variant: "labelsLight",
    fontSize: responsivePixelSize(14),
  };
  const contentStyles: TextProps<Theme> = {
    variant: "mediumTextDark",
    fontSize: responsivePixelSize(14),
  };

  return {
    containerStyles,
    iconStyles,
    imageStyles,
    labelStyles,
    contentStyles,
  };
};
