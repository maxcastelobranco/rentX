import React from "react";
import Animated, { interpolate, useAnimatedStyle, Extrapolate } from "react-native-reanimated";

import { baseURL } from "../../../../../../../../services/api";
import Electric from "../../../../../../../../components/svgs/static/Electric";
import Gas from "../../../../../../../../components/svgs/static/Gas";
import Hybrid from "../../../../../../../../components/svgs/static/Hybrid";
import { CAR_ITEM_INTERVAL, CAR_ITEM_WIDTH } from "../../constants";
import { EngineTypes, TransmissionTypes } from "../../../../hooks/useFilterBoilerplate";

import { useStyles } from "./styles";
import CarImages from "./components/CarImages";
import CarData from "./components/CarData";

export interface CarData {
  id: string;
  dailyRate: number;
  available: true;
  make: string;
  model: string;
  topSpeed: number;
  acceleration: number;
  horsePower: number;
  engineType: EngineTypes;
  transmission: TransmissionTypes;
  seating: number;
  images: string[];
}

interface CarProps {
  data: CarData;
  index: number;
  translationY: Animated.SharedValue<number>;
}

const Car: React.FC<CarProps> = ({
  data: { make, model, dailyRate, images, engineType },
  translationY,
  index,
}) => {
  const { containerStyles, iconStyles } = useStyles();
  const imageUris = images.map((image) => `${baseURL}${image}`);
  const inputRange = [
    CAR_ITEM_INTERVAL * (index - 1),
    CAR_ITEM_INTERVAL * index,
    CAR_ITEM_INTERVAL * (index + 1),
  ];
  const animatedStyle = useAnimatedStyle(() => {
    const opacity = interpolate(translationY.value, inputRange, [0.5, 1, 0]);
    const translateX = interpolate(
      translationY.value,
      inputRange,
      [0, 0, CAR_ITEM_WIDTH],
      Extrapolate.CLAMP
    );
    return {
      opacity,
      transform: [{ translateX }],
    };
  });

  const icon =
    engineType === "electric" ? (
      <Electric style={iconStyles} />
    ) : engineType === "gas" ? (
      <Gas style={iconStyles} />
    ) : (
      <Hybrid style={iconStyles} />
    );

  return (
    <Animated.View style={[animatedStyle, containerStyles]}>
      <CarData {...{ make, model, dailyRate }} />
      {icon}
      <CarImages {...{ imageUris }} />
    </Animated.View>
  );
};

export default Car;
