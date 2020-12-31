import React from "react";
import Animated, { useAnimatedStyle, withSpring, withTiming } from "react-native-reanimated";

import { DailyRateType, EngineTypes, TransmissionTypes } from "../../hooks/useFilterBoilerplate";

import { SHEET_HEIGHT, useStyles } from "./styles";
import Header from "./components/Header";
import DailyRate from "./components/DailyRate";

interface FilterProps {
  open: Animated.SharedValue<boolean>;
  dailyRate: DailyRateType;
  setDailyRate: React.Dispatch<React.SetStateAction<DailyRateType>>;
  engineType: EngineTypes;
  setEngineType: React.Dispatch<React.SetStateAction<EngineTypes>>;
  transmission: TransmissionTypes;
  setTransmission: React.Dispatch<React.SetStateAction<TransmissionTypes>>;
}
const SNAP_POINTS = [SHEET_HEIGHT * 0.3, SHEET_HEIGHT];

const Filter: React.FC<FilterProps> = ({ open, dailyRate, setDailyRate }) => {
  const { containerStyles } = useStyles();

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: open.value ? withSpring(SNAP_POINTS[0]) : withTiming(SNAP_POINTS[1]),
        },
      ],
    };
  });

  const closeFilter = () => {
    open.value = false;
  };

  return (
    <Animated.View style={[containerStyles, animatedStyle]}>
      <Header onPress={closeFilter} />
      <DailyRate {...{ dailyRate, setDailyRate }} />
    </Animated.View>
  );
};

export default Filter;
