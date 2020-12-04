import { Dimensions } from "react-native";

const baseRatio = 812 / 375;

const { width, height } = Dimensions.get("window");

const responsivePixelSize = (pixels: number): number => {
  const currentRatio = height / width;

  return (pixels * currentRatio) / baseRatio;
};

export default responsivePixelSize;
