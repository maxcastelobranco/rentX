import { Dimensions, ViewStyle } from "react-native";

import responsivePixelSize from "../../../../../../utils/responsivePixelSize";

const { height, width } = Dimensions.get("window");

export const SHEET_HEIGHT = height * 0.9;

export const useStyles = () => {
  const containerStyles: ViewStyle = {
    position: "absolute",
    bottom: 0,
    height: SHEET_HEIGHT,
    width,
    borderRadius: responsivePixelSize(24),
    backgroundColor: "#000",
  };

  return {
    containerStyles,
  };
};
