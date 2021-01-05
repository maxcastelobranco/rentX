import React, { useMemo, useState } from "react";
import { FlatList, ListRenderItem } from "react-native";

import { useListingPageCars } from "../../../../../../hooks/useListingPageCars";
import { CarData } from "../../../../../../context/reducers/carParamsReducer";
import Loading from "../../../../../../components/static/Loading";
import { Text } from "../../../../../../theme";

interface ResultsProps {
  query: string;
}

const INCREMENT = 10;

const Results: React.FC<ResultsProps> = ({ query }) => {
  const { cars, error, isLoading } = useListingPageCars(query);
  const [end, setEnd] = useState(INCREMENT);

  const data = useMemo(() => {
    return cars?.slice(0, end);
  }, [cars, end]);

  const renderItem: ListRenderItem<CarData> = ({ item: { make, model } }) => (
    <Text>{`${make}, ${model}`}</Text>
  );

  if (error) {
    return <Text variant="smallTextMediumDark">{error}</Text>;
  }
  if (isLoading) {
    return <Loading color="primary" />;
  }

  return <FlatList {...{ data, renderItem }} />;
};

export default Results;
