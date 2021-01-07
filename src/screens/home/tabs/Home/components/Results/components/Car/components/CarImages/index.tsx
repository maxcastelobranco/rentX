import React from "react";
import Animated, { useAnimatedScrollHandler } from "react-native-reanimated";

import { Box } from "../../../../../../../../../../theme";
import { CAR_ITEM_WIDTH } from "../../../../constants";
import ProgressIndicator from "../../../../../../../../../../components/animated/ProgressIndicator";

import AnimatedImage from "./components/AnimatedImage";
import { useStyles } from "./styles";

interface CarImagesProps {
  imageUris: string[];
  translationX: Animated.SharedValue<number>;
  currentIndex: Animated.SharedValue<number>;
}

const CarImages: React.FC<CarImagesProps> = ({
  imageUris,
  translationX,
  currentIndex,
}) => {
  const { carListStyles, progressIndicatorContainerStyles } = useStyles();

  const onScroll = useAnimatedScrollHandler({
    onScroll: ({ contentOffset: { x } }) => {
      translationX.value = x;
    },
  });

  return (
    <>
      <Animated.ScrollView
        {...{ onScroll }}
        horizontal
        snapToInterval={CAR_ITEM_WIDTH}
        showsHorizontalScrollIndicator={false}
        style={carListStyles}
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
