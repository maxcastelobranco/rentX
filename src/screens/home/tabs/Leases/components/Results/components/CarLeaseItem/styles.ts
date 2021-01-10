import { BoxProps, TextProps, useTheme } from "@shopify/restyle";
import { ImageStyle, StyleSheet, ViewStyle } from "react-native";

import { Theme } from "../../../../../../../../theme";
import {
  LEASE_ITEM_HEIGHT,
  LEASE_ITEM_WIDTH,
  TIME_INTERVAL_HEIGHT,
} from "../../constants";
import responsivePixelSize from "../../../../../../../../utils/responsivePixelSize";

export const useStyles = () => {
  const theme = useTheme<Theme>();

  const containerStyles: ViewStyle = {
    height: LEASE_ITEM_HEIGHT,
    width: LEASE_ITEM_WIDTH,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: theme.colors.backgroundLight1,
    marginTop: theme.spacing.s,
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
    left: LEASE_ITEM_WIDTH / 3,
  };
  const labelStyles: TextProps<Theme> = {
    fontFamily: "Archivo-Regular",
    textTransform: "uppercase",
    color: "textMediumLight1",
    fontSize: responsivePixelSize(12),
  };
  const contentStyles: TextProps<Theme> = {
    fontFamily: "Roboto-Medium",
    color: "textDark1",
    lineHeight: responsivePixelSize(30),
    fontSize: responsivePixelSize(14),
  };
  const timeIntervalStyles: BoxProps<Theme> = {
    flexDirection: "row",
    height: TIME_INTERVAL_HEIGHT,
    backgroundColor: "backgroundLight1",
    marginTop: "xxs",
    marginHorizontal: "l",
    alignItems: "center",
    justifyContent: "space-evenly",
  };
  const dateStyles: TextProps<Theme> = {
    fontFamily: "Archivo-Medium",
    fontSize: responsivePixelSize(14),
  };

  return {
    containerStyles,
    iconStyles,
    imageStyles,
    labelStyles,
    contentStyles,
    timeIntervalStyles,
    dateStyles,
  };
};
