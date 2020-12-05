import { Dimensions, ViewStyle } from "react-native";

import { LOGO_HEIGHT, LOGO_WIDTH } from "../../svgs/static/Logo";
import { UNION_HEIGHT, UNION_WIDTH } from "../../svgs/static/Union";

const { width, height } = Dimensions.get("window");

export const useStyles = () => {
  const logoStyles: ViewStyle = {
    position: "absolute",
    top: height / 2 - LOGO_HEIGHT / 2,
    right: width / 2 - LOGO_WIDTH / 2,
  };
  const unionStyles: ViewStyle = {
    position: "absolute",
    top: height / 2 - UNION_HEIGHT / 2,
    right: width / 2 - UNION_WIDTH / 2,
  };

  return {
    logoStyles,
    unionStyles,
  };
};
