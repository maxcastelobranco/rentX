import React, { useMemo } from "react";
import { FlatList, ListRenderItem } from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";

import { useCars } from "../../../../../../../../hooks/useCars";
import Car from "../Car";
import { CarData } from "../../../../../../../../context/reducers/carParamsReducer";
import { useAppContext } from "../../../../../../../../context";
import Loading from "../../../../../../../../components/static/Loading";
import {
  CAR_ITEM_HEIGHT,
  CAR_ITEM_INTERVAL,
  CAR_ITEM_WIDTH,
  INCREMENT,
} from "../../constants";
import { Box, Text } from "../../../../../../../../theme";

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

interface CarListProps {
  end: number;
  setEnd: React.Dispatch<React.SetStateAction<number>>;
}

const CarList: React.FC<CarListProps> = ({ end, setEnd }) => {
  const {
    state: { carParams },
  } = useAppContext();
  const { cars, isLoading, error } = useCars(carParams);
  const isLoadingMoreCars = useSharedValue(false);

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
        isLoadingMoreCars.value = true;
        setEnd((prevState) => prevState + INCREMENT);
      }
    }
    isLoadingMoreCars.value = false;
  };
  const keyExtractor = ({ id }: CarData) => id;

  if (error) {
    return <Text variant="smallTextMediumDark">{error}</Text>;
  }
  if (isLoading) {
    return <Loading color="primary" />;
  }

  const ListEmptyComponent = (
    <Text variant="smallTextMediumDark">We got nothing ¯\_(ツ)_/¯</Text>
  );
  const ListFooterComponent = (
    <>
      {cars && end > cars.length ? (
        <Box
          width={CAR_ITEM_WIDTH}
          height={CAR_ITEM_HEIGHT}
          alignItems="center"
        >
          <Text variant="smallTextMediumDark">That's all folks (☞ﾟヮﾟ)☞</Text>
        </Box>
      ) : (
        <Box
          width={CAR_ITEM_WIDTH}
          height={CAR_ITEM_HEIGHT}
          alignItems="center"
        >
          <Loading color="primary" />
        </Box>
      )}
    </>
  );

  return (
    <AnimatedFlatList
      snapToInterval={CAR_ITEM_INTERVAL}
      onEndReachedThreshold={0.5}
      showsVerticalScrollIndicator={false}
      {...{
        data,
        renderItem,
        keyExtractor,
        onScroll,
        onEndReached,
        ListEmptyComponent,
        ListFooterComponent,
      }}
    />
  );
};

export default CarList;
