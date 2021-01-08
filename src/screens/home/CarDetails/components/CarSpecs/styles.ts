import { BoxProps, TextProps, useTheme } from "@shopify/restyle";
import { ViewStyle } from "react-native";

import { Theme } from "../../../../../theme";
import responsivePixelSize from "../../../../../utils/responsivePixelSize";

const SPEC_SIZE = responsivePixelSize(100);

export const useStyles = () => {
  const theme = useTheme<Theme>();
  const containerStyles: BoxProps<Theme> = {
    paddingHorizontal: "l",
    backgroundColor: "backgroundLight1",
  };

  const headerStyles: BoxProps<Theme> = {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  };
  const labelStyles: TextProps<Theme> = {
    variant: "labelsLight",
  };
  const contentStyles: TextProps<Theme> = {
    variant: "mediumTextDark",
    marginTop: "xs",
  };
  const specsContainerStyles: BoxProps<Theme> = {
    flexWrap: "wrap",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "backgroundLight1",
    paddingVertical: "s",
  };
  const specStyles: ViewStyle = {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.textLight1,
    margin: theme.spacing.xxs,
    width: SPEC_SIZE,
    height: SPEC_SIZE,
  };
  const specTextStyles: TextProps<Theme> = {
    variant: "smallTextMediumLight",
    marginTop: "xs",
  };

  return {
    containerStyles,
    headerStyles,
    labelStyles,
    contentStyles,
    specsContainerStyles,
    specStyles,
    specTextStyles,
  };
};
