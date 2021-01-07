import React from "react";
import Animated, {
  useAnimatedScrollHandler,
  useDerivedValue,
  useSharedValue,
} from "react-native-reanimated";
import { Dimensions } from "react-native";

import ProgressIndicator from "../../../../../components/animated/ProgressIndicator";
import { Box } from "../../../../../theme";

import { useStyles } from "./styles";
import AnimatedImage from "./components/AnimatedImage";

interface CarImagesProps {
  imageUris: string[];
  scrollViewRef: React.RefObject<Animated.ScrollView>;
}

const { width } = Dimensions.get("window");

const CarImages: React.FC<CarImagesProps> = ({ imageUris, scrollViewRef }) => {
  const { carListStyles, progressIndicatorContainerStyles } = useStyles();

  const translationX = useSharedValue(0);
  const currentIndex = useDerivedValue(() => translationX.value / width);

  const onScroll = useAnimatedScrollHandler({
    onScroll: ({ contentOffset: { x } }) => {
      translationX.value = x;
    },
  });

  return (
    <>
      <Animated.ScrollView
        ref={scrollViewRef}
        horizontal
        snapToInterval={width}
        showsHorizontalScrollIndicator={false}
        style={carListStyles}
        {...{ onScroll }}
      >
        {imageUris.map((uri, index) => (
          <AnimatedImage key={uri} {...{ index, currentIndex, uri }} />
        ))}
      </Animated.ScrollView>
      <Box {...progressIndicatorContainerStyles}>
        {imageUris.map((_, index) => (
          <ProgressIndicator key={index} {...{ index, currentIndex }} />
        ))}
      </Box>
    </>
  );
};

export default CarImages;
