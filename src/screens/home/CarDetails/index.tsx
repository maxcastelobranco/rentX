import React, { useEffect } from "react";
import Animated, {
  runOnUI,
  useAnimatedRef,
  scrollTo,
} from "react-native-reanimated";
import { Dimensions } from "react-native";

import { Box } from "../../../theme";
import { HomeNavigationProps } from "../../../routes/home";
import { baseURL } from "../../../services/api";

import CarImages from "./components/CarImages";

const { width } = Dimensions.get("window");

const CarDetails: React.FC<HomeNavigationProps<"CarDetails">> = ({
  route: {
    params: { data, currentImageIndex },
  },
}) => {
  const scrollViewRef = useAnimatedRef<Animated.ScrollView>();
  const { images } = data;

  const imageUris = images.map((image) => `${baseURL}${image}`);

  useEffect(() => {
    runOnUI(() => {
      "worklet";
      scrollTo(scrollViewRef, width * currentImageIndex, 0, false);
    })();
  }, [currentImageIndex, scrollViewRef]);

  return (
    <Box>
      <CarImages {...{ imageUris, scrollViewRef }} />
    </Box>
  );
};

export default CarDetails;
