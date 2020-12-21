import React from "react";
import Animated, {
  useAnimatedRef,
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";

import OptionContainer from "../OptionContainer";
import { OPTION_HEIGHT, VISIBLE_ITEMS } from "../../constants";
import { Box } from "../../../../../../../theme";

import { useStyles } from "./styles";

interface SliderProps {
  options: string[];
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}

const Slider: React.FC<SliderProps> = ({ options, value, setValue }) => {
  const { containerStyles } = useStyles();
  const scrollViewRef = useAnimatedRef<Animated.ScrollView>();
  const translateY = useSharedValue(0);
  const onScroll = useAnimatedScrollHandler({
    onScroll: ({ contentOffset }) => {
      translateY.value = contentOffset.y;
    },
  });

  return (
    <Box {...containerStyles}>
      <Animated.ScrollView
        {...{ onScroll }}
        ref={scrollViewRef}
        snapToInterval={OPTION_HEIGHT}
        decelerationRate="fast"
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: (VISIBLE_ITEMS - 1) * OPTION_HEIGHT,
        }}
      >
        {options.map((option, index) => (
          <OptionContainer
            key={option}
            {...{ option, translateY, index, value, setValue, scrollViewRef }}
          />
        ))}
      </Animated.ScrollView>
    </Box>
  );
};

export default Slider;
