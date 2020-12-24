import React from "react";
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  withSpring,
} from "react-native-reanimated";
import { Dimensions, ViewStyle } from "react-native";
import { useTheme } from "@shopify/restyle";

import { Theme } from "../../../../../../../theme";
import { ICON_SIZE, TAB_BAR_HEIGHT } from "../../constants";

interface FocusIndicatorProps {
  stateIndex: number;
}

const { width } = Dimensions.get("window");

const TAB_WIDTH = width / 4;
const WIDTH = TAB_WIDTH * 0.1;

const FocusIndicator: React.FC<FocusIndicatorProps> = ({ stateIndex }) => {
  const theme = useTheme<Theme>();
  const translateX = useDerivedValue(() => withSpring(stateIndex * TAB_WIDTH));

  const style: ViewStyle = {
    position: "absolute",
    bottom: TAB_BAR_HEIGHT / 2 - ICON_SIZE / 2 - theme.spacing.s,
    left: TAB_WIDTH / 2 - WIDTH / 2,
    width: WIDTH,
    height: 4,
    backgroundColor: theme.colors.primary,
    borderRadius: WIDTH / 2,
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });
  return <Animated.View style={[style, animatedStyle]} />;
};

export default FocusIndicator;
