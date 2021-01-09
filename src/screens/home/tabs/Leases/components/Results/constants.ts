import { Dimensions } from "react-native";

import theme from "../../../../../../theme";
import responsivePixelSize from "../../../../../../utils/responsivePixelSize";

const { width } = Dimensions.get("window");

export const LEASE_ITEM_HEIGHT = responsivePixelSize(150);
export const TIME_INTERVAL_HEIGHT = responsivePixelSize(50);
export const LEASE_ITEM_WIDTH = width - theme.spacing.l * 2;
export const LEASE_ITEM_INTERVAL =
  theme.spacing.s +
  LEASE_ITEM_HEIGHT +
  theme.spacing.xxs +
  TIME_INTERVAL_HEIGHT;
export const INCREMENT = 5;
