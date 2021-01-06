import { useTheme } from "@shopify/restyle";

import responsivePixelSize from "../../../utils/responsivePixelSize";
import { Theme } from "../../../theme";

const PROGRESS_INDICATOR_SIZE = responsivePixelSize(12);

export const useStyles = (index: number) => {
  const theme = useTheme<Theme>();

  return {
    width: PROGRESS_INDICATOR_SIZE,
    height: PROGRESS_INDICATOR_SIZE,
    marginLeft: index === 0 ? 0 : theme.spacing.xs,
  };
};
