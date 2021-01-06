import React, { useMemo, useState } from "react";
import { FlatList, ListRenderItem } from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import { useTheme } from "@shopify/restyle";

import { useListingPageCars } from "../../../../../../hooks/useListingPageCars";
import { CarData } from "../../../../../../context/reducers/carParamsReducer";
import Loading from "../../../../../../components/static/Loading";
import { Text, Theme } from "../../../../../../theme";
import ListEmptyComponent from "../../../components/ListEmptyComponent";
import ListFooterComponent from "../../../components/ListFooterComponent";

import Car from "./components/Car";
import { CAR_ITEM_INTERVAL, INCREMENT } from "./constants";

interface ResultsProps {
  query: string;
}

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const Results: React.FC<ResultsProps> = ({ query }) => {
  const theme = useTheme<Theme>();
  const { cars, error, isLoading } = useListingPageCars(query);
  const [end, setEnd] = useState(INCREMENT);

  const translationY = useSharedValue(0);
  const onScroll = useAnimatedScrollHandler({
    onScroll: ({ contentOffset: { y } }) => {
      translationY.value = y;
    },
  });

  const data = useMemo(() => {
    return cars?.slice(0, end);
  }, [cars, end]);

  const renderItem: ListRenderItem<CarData> = ({ item, index }) => (
    <Car data={item} {...{ translationY, index }} />
  );
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
          height={CAR_ITEM_INTERVAL}
        />
      }
      contentContainerStyle={{
        paddingBottom: CAR_ITEM_INTERVAL - theme.spacing.s / 2,
      }}
      snapToInterval={CAR_ITEM_INTERVAL}
      onEndReachedThreshold={0.5}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default Results;
