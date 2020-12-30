import { useTheme } from "@shopify/restyle";
import { Dimensions, ImageStyle } from "react-native";

import { Theme } from "../../../../../../../../../../../../theme";

const { width } = Dimensions.get("window");

export const useStyles = () => {
  const theme = useTheme<Theme>();
  const IMAGE_WIDTH = width - theme.spacing.l * 2;
  const IMAGE_HEIGHT = IMAGE_WIDTH / 2;

  const imageStyles: ImageStyle = {
    width: IMAGE_WIDTH,
    height: IMAGE_HEIGHT,
    alignSelf: "center",
  };

  return {
    imageStyles,
  };
};
