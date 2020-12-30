import React from "react";
import Animated, {
  Easing,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

import { useStyles } from "./styles";
import Header from "./components/Header";
import { useCarData } from "./hooks/useCarData";
import CarList from "./components/CarList";

interface ResultsProps {
  anyPickerOpen: Animated.SharedValue<boolean>;
  filterOpen: Animated.SharedValue<boolean>;
}

const timingConfig: Animated.WithTimingConfig = {
  duration: 500,
  easing: Easing.bezier(0.22, 1, 0.36, 1),
};

const Results: React.FC<ResultsProps> = ({ anyPickerOpen, filterOpen }) => {
  const { containerStyles } = useStyles();

  const animatedStyle = useAnimatedStyle(() => {
    return {
      flex: withTiming(anyPickerOpen.value ? 0.2 : 6, timingConfig),
    };
  });

  const toggleFilter = () => {
    filterOpen.value = !filterOpen.value;
  };

  const { cars, totalCars, loadCars, page } = useCarData();

  return (
    <Animated.View style={[containerStyles, animatedStyle]}>
      <Header onPress={toggleFilter} {...{ totalCars }} />
      <CarList {...{ cars, loadCars, page }} />
    </Animated.View>
  );
};

export default Results;
