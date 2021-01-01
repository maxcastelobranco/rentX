import React from "react";
import Animated, {
  Easing,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from "react-native-reanimated";
import { RectButton } from "react-native-gesture-handler";
import { useTiming } from "react-native-redash";

import theme, { Box } from "../../../../../../../theme";
import { ICON_SIZE } from "../../constants";
import { animateScale } from "../../../../../../../utils/animateScale";

import { useStyles } from "./styles";

interface TabProps {
  stateIndex: number;
  isFocused: boolean;
  onPress(): void;
  tabBarIcon?(props: {
    focused: boolean;
    color: string;
    size: number;
  }): React.ReactNode;
}

const timingConfig: Animated.WithTimingConfig = {
  duration: 750,
  easing: Easing.bezier(0.16, 1, 0.3, 1),
};

const Tab: React.FC<TabProps> = ({
  stateIndex,
  isFocused,
  onPress,
  tabBarIcon,
}) => {
  const { tabStyles, overlaidIconStyles } = useStyles();

  const stateIndexTransition = useTiming(stateIndex, timingConfig);
  const isGoingLeft = useDerivedValue(
    () => stateIndexTransition.value > stateIndex
  );
  const scale = useTiming(isFocused, timingConfig);
  const opacity = useDerivedValue(() => withTiming(isFocused ? 0 : 1));

  const animatedOverlaidIconStyle = useAnimatedStyle(() => {
    return {
      transform: isFocused
        ? isGoingLeft.value
          ? animateScale({ direction: "fromRight", size: ICON_SIZE, scale })
          : animateScale({ direction: "fromLeft", size: ICON_SIZE, scale })
        : isGoingLeft.value
        ? animateScale({ direction: "fromLeft", size: ICON_SIZE, scale })
        : animateScale({ direction: "fromRight", size: ICON_SIZE, scale }),
    };
  });
  const animatedBottomIconStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  return (
    <RectButton {...{ onPress }} style={tabStyles}>
      {tabBarIcon && (
        <Box {...overlaidIconStyles}>
          <Animated.View style={animatedOverlaidIconStyle}>
            {tabBarIcon({
              focused: true,
              size: ICON_SIZE,
              color: theme.colors.primary,
            })}
          </Animated.View>
        </Box>
      )}
      {tabBarIcon && (
        <Animated.View style={animatedBottomIconStyle}>
          {tabBarIcon({
            focused: false,
            size: ICON_SIZE,
            color: theme.colors.primary,
          })}
        </Animated.View>
      )}
    </RectButton>
  );
};

export default Tab;
