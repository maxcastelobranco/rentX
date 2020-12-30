import React from "react";
import { FlatList } from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";

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

  return (
    <AnimatedFlatList
      onScroll={onScroll}
      data={cars}
      keyExtractor={({ id }: CarData) => id}
      renderItem={({ item, index }: { item: CarData; index: number }) => (
        <Car data={item} translationY={translationY} index={index} />
      )}
      onEndReachedThreshold={0.5}
      onEndReached={() => {
        loadCars(page).catch(console.error);
      }}
      snapToInterval={CAR_ITEM_INTERVAL}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default CarList;
