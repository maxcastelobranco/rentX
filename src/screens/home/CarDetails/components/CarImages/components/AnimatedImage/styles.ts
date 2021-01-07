import { Dimensions, ImageStyle } from "react-native";

import { ASPECT_RATIO } from "../../../../../../../../assets/images";

const { width } = Dimensions.get("window");

export const useStyles = () => {
  const imageStyles: ImageStyle = {
    width,
    height: width / ASPECT_RATIO,
    alignSelf: "center",
  };

  return {
    imageStyles,
  };
};
