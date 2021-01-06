import React, { useMemo } from "react";
import { FlatList, ListRenderItem } from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import { useTheme } from "@shopify/restyle";

import { useHomePageCars } from "../../../../../../../../hooks/useHomePageCars";
import Car from "../Car";
import { CarData } from "../../../../../../../../context/reducers/carParamsReducer";
import { useAppContext } from "../../../../../../../../context";
import Loading from "../../../../../../../../components/static/Loading";
import { CAR_ITEM_INTERVAL, INCREMENT } from "../../constants";
import { Text, Theme } from "../../../../../../../../theme";
import ListFooterComponent from "../../../../../components/ListFooterComponent";
import ListEmptyComponent from "../../../../../components/ListEmptyComponent";

interface CarListProps {
  end: number;
  setEnd: React.Dispatch<React.SetStateAction<number>>;
  headerHeight: number;
}

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const CarList: React.FC<CarListProps> = ({ end, setEnd, headerHeight }) => {
  const {
    state: { carParams },
  } = useAppContext();
  const { cars, isLoading, error } = useHomePageCars(carParams);
  const theme = useTheme<Theme>();

  const translationY = useSharedValue(0);
  const onScroll = useAnimatedScrollHandler({
    onScroll: ({ contentOffset: { y } }) => {
      translationY.value = y;
    },
  });

  const renderItem: ListRenderItem<CarData> = ({ item, index }) => (
    <Car data={item} {...{ translationY, index }} />
  );
  const data = useMemo(() => {
    return cars?.slice(0, end);
  }, [cars, end]);

  const onEndReached = () => {
    if (cars) {
      if (end <= cars.length) {
        setEnd((prevState) => prevState + INCREMENT);
      }
    }
  };
  const keyExtractor = ({ id }: CarData) => id;

  if (error) {
    return <Text variant="smallTextMediumDark">{error}</Text>;
  }
  if (isLoading) {
    return <Loading color="primary" />;
  }

  return (
    <AnimatedFlatList
      {...{
        data,
        renderItem,
        keyExtractor,
        onScroll,
        onEndReached,
        ListEmptyComponent,
      }}
      ListFooterComponent={
        <ListFooterComponent
          reachedTheEnd={cars && end > cars.length}
          height={CAR_ITEM_INTERVAL - headerHeight - theme.spacing.s}
        />
      }
      snapToInterval={CAR_ITEM_INTERVAL}
      onEndReachedThreshold={0.5}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default CarList;
