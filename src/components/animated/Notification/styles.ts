import { StyleSheet } from "react-native";
import { TextProps, useTheme } from "@shopify/restyle";

import { Theme } from "../../../theme";
import responsivePixelSize from "../../../utils/responsivePixelSize";

const NOTIFICATION_WIDTH = responsivePixelSize(280);
const NOTIFICATION_HEIGHT = responsivePixelSize(NOTIFICATION_WIDTH * 0.4);

export const useStyles = () => {
  const theme = useTheme<Theme>();

  const styleSheet = StyleSheet.create({
    container: {
      width: NOTIFICATION_WIDTH,
      height: NOTIFICATION_HEIGHT,
      padding: theme.spacing.xs,
      position: "absolute",
      flexDirection: "row",
      alignItems: "center",
      // TODO: SHADOW STUFF
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
  });

  const messageStyles: TextProps<Theme> = {
    variant: "smallTextMediumDark",
    color: "textDark1",
    padding: "s",
  };

  return {
    styleSheet,
    messageStyles,
    NOTIFICATION_WIDTH,
  };
};
