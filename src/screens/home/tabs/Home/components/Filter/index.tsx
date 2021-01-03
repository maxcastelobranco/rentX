import React, { useState } from "react";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";
import { snapPoint } from "react-native-redash";

import Button from "../../../../../../components/animated/Button";
import Gas from "../../../../../../components/svgs/static/engineTypes/Gas";
import Electric from "../../../../../../components/svgs/static/engineTypes/Electric";
import Hybrid from "../../../../../../components/svgs/static/engineTypes/Hybrid";
import {
  CarParamsActionTypes,
  EngineTypes,
  TransmissionTypes,
} from "../../../../../../context/reducers/carParamsReducer";
import { useAppContext } from "../../../../../../context";
import { INCREMENT } from "../Results/constants";

import { SHEET_HEIGHT, useStyles } from "./styles";
import Header from "./components/Header";
import DailyRate from "./components/DailyRate";
import EngineTypesPicker from "./components/EngineTypesPicker";
import TransmissionTypePicker from "./components/TransmissionTypePicker";

interface FilterProps {
  open: Animated.SharedValue<boolean>;
  setEnd: React.Dispatch<React.SetStateAction<number>>;
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

const Filter: React.FC<FilterProps> = ({ open, setEnd }) => {
  const {
    state: {
      carParams: { dailyRate },
    },
    dispatch,
  } = useAppContext();
  const { containerStyles, extraContainerStyles } = useStyles();

  const translateY = useSharedValue(0);
  const onGestureEvent = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>(
    {
      onActive: ({ translationY }) => {
        translateY.value = translationY;
      },
      onEnd: ({ velocityY }) => {
        const destination = snapPoint(translateY.value, velocityY, SNAP_POINTS);
        if (destination === SNAP_POINTS[0]) {
          open.value = true;
        } else if (destination === SNAP_POINTS[1]) {
          open.value = false;
        }
        translateY.value = withTiming(0);
      },
    }
  );
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: open.value
            ? withSpring(SNAP_POINTS[0])
            : withTiming(SNAP_POINTS[1]),
        },
        {
          translateY: translateY.value,
        },
      ],
    };
  });
  const closeFilter = () => {
    open.value = false;
  };

  const [engineTypeIndex, setEngineTypeIndex] = useState(-1);
  const [transmissionTypeIndex, setTransmissionTypeIndex] = useState(-1);
  const startValue = useSharedValue(dailyRate.from);
  const endValue = useSharedValue(dailyRate.to);

  const onPress = () => {
    setEnd(INCREMENT);

    const engineType =
      engineTypeIndex >= 0 ? engineTypeOptions[engineTypeIndex].type : "";
    const transmission =
      transmissionTypeIndex >= 0
        ? transmissionTypeOptions[transmissionTypeIndex]
        : "";

    dispatch({
      type: CarParamsActionTypes.Update,
      payload: {
        dailyRate: {
          from: startValue.value,
          to: endValue.value,
        },
        engineType,
        transmission,
      },
    });
    closeFilter();
  };

  return (
    <PanGestureHandler onGestureEvent={onGestureEvent}>
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
    </PanGestureHandler>
  );
};

export default Filter;
