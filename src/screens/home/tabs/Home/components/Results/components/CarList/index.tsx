import React from "react";
import { FlatList, ListRenderItem } from "react-native";
import Animated, { useAnimatedScrollHandler, useSharedValue } from "react-native-reanimated";

import Car, { CarData } from "../Car";
import { CAR_ITEM_INTERVAL } from "../../constants";

interface CarListProps {
  cars: CarData[];
  loadCars(pageNumber: number): Promise<void>;
  page: number;
}

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const CarList: React.FC<CarListProps> = ({ cars, loadCars, page }) => {
  const translationY = useSharedValue(0);

  const onScroll = useAnimatedScrollHandler({
    onScroll: ({ contentOffset: { y } }) => {
      translationY.value = y;
    },
  });

  const renderItem: ListRenderItem<CarData> = ({ item, index }) => (
    <Car data={item} translationY={translationY} index={index} />
  );
  const onEndReached = () => {
    loadCars(page).catch(console.error);
  };
  const keyExtractor = ({ id }: CarData) => id;

  return (
    <AnimatedFlatList
      onScroll={onScroll}
      data={cars}
      onEndReachedThreshold={0.5}
      snapToInterval={CAR_ITEM_INTERVAL}
      showsVerticalScrollIndicator={false}
      {...{ renderItem, keyExtractor, onEndReached }}
    />
  );
};

export default CarList;
