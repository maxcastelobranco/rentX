import { ViewStyle } from "react-native";
import { TextProps, useTheme } from "@shopify/restyle";

import { OPTION_HEIGHT } from "../../constants";
import { Theme } from "../../../../../../../theme";

export const useStyles = () => {
  const theme = useTheme<Theme>();

  const containerStyles: ViewStyle = {
    height: OPTION_HEIGHT,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing.xs,
    marginHorizontal: theme.spacing.xs,
  };
  const optionTextStyles: TextProps<Theme> = {
    variant: "regularTextDark",
    marginLeft: "xs",
  };

  return {
    containerStyles,
    optionTextStyles,
  };
};
