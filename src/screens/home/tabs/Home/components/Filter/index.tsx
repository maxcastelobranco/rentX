import React, { useState } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

import {
  DailyRateType,
  EngineTypes,
  TransmissionTypes,
} from "../../hooks/useFilterBoilerplate";
import Button from "../../../../../../components/animated/Button";
import Gas from "../../../../../../components/svgs/static/engineTypes/Gas";
import Electric from "../../../../../../components/svgs/static/engineTypes/Electric";
import Hybrid from "../../../../../../components/svgs/static/engineTypes/Hybrid";

import { SHEET_HEIGHT, useStyles } from "./styles";
import Header from "./components/Header";
import DailyRate from "./components/DailyRate";
import EngineTypesPicker from "./components/EngineTypesPicker";
import TransmissionTypePicker from "./components/TransmissionTypePicker";

interface FilterProps {
  open: Animated.SharedValue<boolean>;
  dailyRate: DailyRateType;
  setDailyRate: React.Dispatch<React.SetStateAction<DailyRateType>>;
  setEngineType: React.Dispatch<React.SetStateAction<EngineTypes>>;
  setTransmission: React.Dispatch<React.SetStateAction<TransmissionTypes>>;
  reloadCars: () => Promise<void>;
}
const SNAP_POINTS = [SHEET_HEIGHT * 0.6, SHEET_HEIGHT];

const engineTypeOptions = [
  {
    type: EngineTypes.gas,
    Icon: Gas,
    iconSize: 24,
  },
  {
    type: EngineTypes.electric,
    Icon: Electric,
    iconSize: 24,
  },
  {
    type: EngineTypes.hybrid,
    Icon: Hybrid,
    iconSize: 36,
  },
];
const transmissionTypeOptions = [
  TransmissionTypes.auto,
  TransmissionTypes.manual,
];

const Filter: React.FC<FilterProps> = ({
  open,
  dailyRate,
  setDailyRate,
  setEngineType,
  setTransmission,
  // reloadCars,
}) => {
  const { containerStyles, extraContainerStyles } = useStyles();

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: open.value
            ? withSpring(SNAP_POINTS[0])
            : withTiming(SNAP_POINTS[1]),
        },
      ],
    };
  });
  const closeFilter = () => {
    open.value = false;
  };

  const [engineTypeIndex, setEngineTypeIndex] = useState(0);
  const [transmissionTypeIndex, setTransmissionTypeIndex] = useState(0);
  const startValue = useSharedValue(dailyRate.from);
  const endValue = useSharedValue(dailyRate.to);

  const onPress = () => {
    setDailyRate({
      from: startValue.value,
      to: endValue.value,
    });
    setEngineType(engineTypeOptions[engineTypeIndex].type);
    setTransmission(transmissionTypeOptions[transmissionTypeIndex]);
    closeFilter();
    // reloadCars().catch(console.error);
  };

  return (
    <Animated.View style={[containerStyles, animatedStyle]}>
      <Header onPress={closeFilter} />
      <DailyRate {...{ startValue, endValue }} />
      <EngineTypesPicker
        options={engineTypeOptions}
        selectedOptionIndex={engineTypeIndex}
        setSelectedOptionIndex={setEngineTypeIndex}
      />
      <TransmissionTypePicker
        options={transmissionTypeOptions}
        selectedOptionIndex={transmissionTypeIndex}
        setSelectedOptionIndex={setTransmissionTypeIndex}
      />
      <Button enabled label="Done" {...{ extraContainerStyles, onPress }} />
    </Animated.View>
  );
};

export default Filter;
