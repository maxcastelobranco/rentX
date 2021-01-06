import { BoxProps, TextProps, useTheme } from "@shopify/restyle";

import { Theme } from "../../../../../../../../../../theme";

export const useStyles = () => {
  const theme = useTheme<Theme>();
  const makeModelContainerStyles: BoxProps<Theme> = {
    position: "absolute",
    top: theme.spacing.s,
    left: theme.spacing.s,
  };
  const dailyRateContainerStyles: BoxProps<Theme> = {
    position: "absolute",
    top: theme.spacing.s,
    right: theme.spacing.s,
  };
  const labelStyles: TextProps<Theme> = {
    variant: "labelsLight",
  };
  const contentStyles: TextProps<Theme> = {
    variant: "mediumTextDark",
  };

  return {
    makeModelContainerStyles,
    dailyRateContainerStyles,
    labelStyles,
    contentStyles,
  };
};
