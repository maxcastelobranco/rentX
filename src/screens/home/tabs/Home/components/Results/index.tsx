import React, { useState } from "react";
import { View } from "react-native";
import Animated from "react-native-reanimated";

import { Box } from "../../../../../../theme";

import CarList from "./components/CarList";
import Header from "./components/Header";
import { useStyles } from "./styles";

interface ResultsProps {
  filterOpen: Animated.SharedValue<boolean>;
  end: number;
  setEnd: React.Dispatch<React.SetStateAction<number>>;
}

const Results: React.FC<ResultsProps> = ({ end, setEnd, filterOpen }) => {
  const { containerStyles } = useStyles();
  const [headerHeight, setHeaderHeight] = useState(-1);

  const toggleFilter = () => {
    filterOpen.value = !filterOpen.value;
  };

  return (
    <Box {...containerStyles}>
      <View
        onLayout={({
          nativeEvent: {
            layout: { height },
          },
        }) => {
          setHeaderHeight(height);
        }}
      >
        <Header onPress={toggleFilter} />
      </View>
      <CarList {...{ end, setEnd, headerHeight }} />
    </Box>
  );
};

export default Results;
