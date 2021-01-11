import { ViewStyle } from "react-native";
import { BoxProps, TextProps, useTheme } from "@shopify/restyle";

import { Theme } from "../../../../../../theme";

export const useStyles = () => {
  const theme = useTheme<Theme>();
  const containerStyles: ViewStyle = {
    zIndex: -1,
    backgroundColor: theme.colors.backgroundLight2,
  };
  const userNameStyles: TextProps<Theme> = {
    variant: "titleDarkLargeBold",
    textAlign: "center",
    marginTop: "s",
  };
  const rowStyles: BoxProps<Theme> = {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: "l",
    paddingVertical: "s",
  };
  const totalLeasesContainerStyles: BoxProps<Theme> = {
    ...rowStyles,
    borderBottomWidth: 2,
    borderBottomColor: "textLight2",
  };
  const labelStyles: TextProps<Theme> = {
    variant: "labelsLight",
  };
  const contentStyles: TextProps<Theme> = {
    variant: "smallTextMediumDark",
  };

  return {
    containerStyles,
    userNameStyles,
    rowStyles,
    totalLeasesContainerStyles,
    labelStyles,
    contentStyles,
  };
};
