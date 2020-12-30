import { Dimensions } from "react-native";

import theme from "../../../../../../theme";
import responsivePixelSize from "../../../../../../utils/responsivePixelSize";

const { width } = Dimensions.get("window");

export const CAR_ITEM_HEIGHT = responsivePixelSize(260);
export const CAR_ITEM_WIDTH = width - theme.spacing.l * 2;
export const CAR_ITEM_INTERVAL = theme.spacing.s * 2 + CAR_ITEM_HEIGHT;
