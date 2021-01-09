import React, { useMemo, useState } from "react";
import { FlatList, ListRenderItem } from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";

import Loading from "../../../../../../components/static/Loading";
import { Text } from "../../../../../../theme";
import ListEmptyComponent from "../../../components/ListEmptyComponent";
import ListFooterComponent from "../../../components/ListFooterComponent";
import { useAppContext } from "../../../../../../context";
import { CarLease, useCarLeases } from "../../../../../../hooks/useCarLeases";

import CarLeaseItem from "./components/CarLeaseItem";
import { LEASE_ITEM_INTERVAL, INCREMENT } from "./constants";

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const Results: React.FC = () => {
  const {
    state: {
      authentication: {
        user: { id },
      },
    },
  } = useAppContext();
  const { carLeases, error, isLoading } = useCarLeases(id);
  const [end, setEnd] = useState(INCREMENT);

  const translationY = useSharedValue(0);
  const onScroll = useAnimatedScrollHandler({
    onScroll: ({ contentOffset: { y } }) => {
      translationY.value = y;
    },
  });

  const data = useMemo(() => {
    return carLeases?.slice(0, end);
  }, [carLeases, end]);

  const renderItem: ListRenderItem<CarLease> = ({ item, index }) => (
    <CarLeaseItem data={item} {...{ translationY, index }} />
  );
  const onEndReached = () => {
    if (carLeases) {
      if (end <= carLeases.length) {
        setEnd((prevState) => prevState + INCREMENT);
      }
    }
  };
  const keyExtractor = ({ id: leaseId }: CarLease) => leaseId;

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
          reachedTheEnd={carLeases && end > carLeases.length}
          height={LEASE_ITEM_INTERVAL}
        />
      }
      contentContainerStyle={{
        paddingBottom: 170,
      }}
      snapToInterval={LEASE_ITEM_INTERVAL}
      onEndReachedThreshold={0.5}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default Results;
