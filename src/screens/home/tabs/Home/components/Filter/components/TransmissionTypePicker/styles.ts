import { useTheme } from "@shopify/restyle";
import { Dimensions, ViewStyle } from "react-native";
import { Theme } from "../../../../../../../../theme";


const { height, width } = Dimensions.get("window");


export const useStyles = () => {
  const theme = useTheme<Theme>();

  const containerStyles: ViewStyle = {
  };

  return {
    containerStyles,
  };
};
