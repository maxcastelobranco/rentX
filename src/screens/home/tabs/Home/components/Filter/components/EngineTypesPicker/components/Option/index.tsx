import React from "react";
import { RectButton } from "react-native-gesture-handler";
import Animated, {
  Easing,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from "react-native-reanimated";
import { useTiming } from "react-native-redash";
import { Text, View } from "react-native";

import { EngineTypeIconProps } from "../../../../../../../../../../components/svgs/static/engineTypes/types";
import { animateScale } from "../../../../../../../../../../utils/animateScale";

import { useStyles } from "./styles";

interface OptionProps {
  type: string;
  Icon: React.FC<EngineTypeIconProps>;
  iconSize: number;
  index: number;
  selectedOptionIndex: number;
  setSelectedOptionIndex: React.Dispatch<React.SetStateAction<number>>;
}

const timingConfig: Animated.WithTimingConfig = {
  duration: 750,
  easing: Easing.bezier(0.16, 1, 0.3, 1),
};

const Option: React.FC<OptionProps> = ({
  type,
  Icon,
  iconSize,
  index,
  selectedOptionIndex,
  setSelectedOptionIndex,
}) => {
  const {
    containerStyles,
    overlaidIconStyles,
    overlaidLabelContainerStyles,
    focusedLabelStyles,
    labelStyles,
  } = useStyles();

  const labelSize = type.length * 4;
  const isFocused = selectedOptionIndex === index;

  const opacity = useDerivedValue(() =>
    withTiming(isFocused ? 0 : 1, timingConfig)
  );
  const scale = useTiming(isFocused, timingConfig);
  const selectedTransition = useTiming(selectedOptionIndex, timingConfig);
  const isGoingLeft = useDerivedValue(
    () => selectedTransition.value > selectedOptionIndex
  );

  const animatedOverlaidIconStyle = useAnimatedStyle(() => {
    return {
      transform: isFocused
        ? isGoingLeft.value
          ? animateScale({ direction: "fromRight", size: iconSize, scale })
          : animateScale({ direction: "fromLeft", size: iconSize, scale })
        : isGoingLeft.value
        ? animateScale({ direction: "fromLeft", size: iconSize, scale })
        : animateScale({ direction: "fromRight", size: iconSize, scale }),
    };
  });
  const animatedOverlaidLabelStyle = useAnimatedStyle(() => {
    return {
      transform: isFocused
        ? isGoingLeft.value
          ? animateScale({ direction: "fromRight", size: labelSize, scale })
          : animateScale({ direction: "fromLeft", size: labelSize, scale })
        : isGoingLeft.value
        ? animateScale({ direction: "fromLeft", size: labelSize, scale })
        : animateScale({ direction: "fromRight", size: labelSize, scale }),
    };
  });

  const animatedBottomIconStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });
  const animatedBottomLabelStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  const onPress = () => {
    if (selectedOptionIndex === index) {
      setSelectedOptionIndex(-1);
    } else {
      setSelectedOptionIndex(index);
    }
  };

  return (
    <RectButton style={containerStyles} {...{ onPress }}>
      <Animated.View style={[animatedOverlaidIconStyle, overlaidIconStyles]}>
        <Icon focused />
      </Animated.View>
      <Animated.View
        style={[overlaidLabelContainerStyles, animatedOverlaidLabelStyle]}
      >
        <Text style={[focusedLabelStyles]}>{type}</Text>
      </Animated.View>
      <Animated.View style={[animatedBottomIconStyle, overlaidIconStyles]}>
        <Icon />
      </Animated.View>
      <View style={overlaidLabelContainerStyles}>
        <Animated.Text style={[labelStyles, animatedBottomLabelStyle]}>
          {type}
        </Animated.Text>
      </View>
    </RectButton>
  );
};

export default Option;
