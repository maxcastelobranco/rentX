import React from "react";
import Animated, {
  Easing,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

import { useStyles } from "./styles";
import Header from "./components/Header";
import CarList from "./components/CarList";

interface ResultsProps {
  anyPickerOpen: Animated.SharedValue<boolean>;
  filterOpen: Animated.SharedValue<boolean>;
  end: number;
  setEnd: React.Dispatch<React.SetStateAction<number>>;
}

const timingConfig: Animated.WithTimingConfig = {
  duration: 500,
  easing: Easing.bezier(0.22, 1, 0.36, 1),
};

const Results: React.FC<ResultsProps> = ({
  anyPickerOpen,
  end,
  setEnd,
  filterOpen,
}) => {
  const { containerStyles } = useStyles();

  const animatedStyle = useAnimatedStyle(() => {
    return {
      flex: withTiming(anyPickerOpen.value ? 0.2 : 6, timingConfig),
    };
  });

  const toggleFilter = () => {
    filterOpen.value = !filterOpen.value;
  };

  return (
    <Animated.View style={[containerStyles, animatedStyle]}>
      <Header onPress={toggleFilter} />
      <CarList {...{ end, setEnd }} />
    </Animated.View>
  );
};

export default Results;
