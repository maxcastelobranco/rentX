import { TextProps, useTheme } from "@shopify/restyle";
import { ImageStyle, StyleSheet, ViewStyle } from "react-native";

import { Theme } from "../../../../../../../../theme";
import { CAR_ITEM_HEIGHT, CAR_ITEM_WIDTH } from "../../constants";
import responsivePixelSize from "../../../../../../../../utils/responsivePixelSize";

export const useStyles = () => {
  const theme = useTheme<Theme>();

  const containerStyles: ViewStyle = {
    height: CAR_ITEM_HEIGHT,
    width: CAR_ITEM_WIDTH,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: theme.colors.backgroundLight1,
    marginVertical: theme.spacing.s,
    padding: theme.spacing.s,
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
