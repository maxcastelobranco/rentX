import React from "react";
import Animated, {
  interpolate,
  useAnimatedStyle,
  Extrapolate,
  withTiming,
  runOnUI,
  scrollTo,
} from "react-native-reanimated";
import { RectButton } from "react-native-gesture-handler";

import { Text } from "../../../../../../../theme";
import data, { OPTION_HEIGHT } from "../../constants";
import FocusIndicator from "../FocusIndicator";

import { useStyles } from "./styles";

interface OptionContainerProps {
  option: string;
  translateY: Animated.SharedValue<number>;
  index: number;
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
  scrollViewRef: React.RefObject<Animated.ScrollView>;
}

const OptionContainer: React.FC<OptionContainerProps> = ({
  option,
  translateY,
  index,
  value,
  setValue,
  scrollViewRef,
}) => {
  const { containerStyles, optionTextStyles } = useStyles();
  const { valueMap } = data;
  const selected = valueMap[option] === value;

  const animatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      translateY.value,
      [
        (index - 1) * OPTION_HEIGHT,
        index * OPTION_HEIGHT,
        (index + 1) * OPTION_HEIGHT,
      ],
      [0.6, 1, 0.6],
      Extrapolate.CLAMP
    );
    return {
      opacity: selected ? withTiming(1) : withTiming(0.6),
      transform: [{ scale }],
    };
  });

  const onPress = () => {
    runOnUI(() => {
      "worklet";
      scrollTo(scrollViewRef, 0, OPTION_HEIGHT * index, true);
    })();
    setValue(valueMap[option]);
  };

  return (
    <RectButton {...{ onPress }}>
      <Animated.View style={[containerStyles, animatedStyle]}>
        <FocusIndicator {...{ selected }} />
        <Text {...optionTextStyles}>{option}</Text>
      </Animated.View>
    </RectButton>
  );
};

export default OptionContainer;
