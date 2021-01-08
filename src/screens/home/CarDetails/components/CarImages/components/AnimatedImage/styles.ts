import { Dimensions, ImageStyle } from "react-native";
import { useTheme } from "@shopify/restyle";

import { ASPECT_RATIO } from "../../../../../../../../assets/images";
import { Theme } from "../../../../../../../theme";

const { width } = Dimensions.get("window");

export const useStyles = () => {
  const theme = useTheme<Theme>();

  const IMAGE_WIDTH = width - theme.spacing.l * 2;

  const imageStyles: ImageStyle = {
    width: IMAGE_WIDTH,
    height: IMAGE_WIDTH / ASPECT_RATIO,
    marginHorizontal: theme.spacing.l,
    alignSelf: "center",
  };

  return {
    imageStyles,
  };
};
