import React from "react";
import Animated, {
  useAnimatedScrollHandler,
  useDerivedValue,
  useSharedValue,
} from "react-native-reanimated";

import { Box } from "../../../../../../../../../../theme";
import { CAR_ITEM_WIDTH } from "../../../../constants";
import ProgressIndicator from "../../../../../../../../../../components/animated/ProgressIndicator";

import AnimatedImage from "./components/AnimatedImage";
import { useStyles } from "./styles";

interface CarImagesProps {
  imageUris: string[];
}

const CarImages: React.FC<CarImagesProps> = ({ imageUris }) => {
  const { carListStyles, progressIndicatorContainerStyles } = useStyles();
  const translationX = useSharedValue(0);
  const currentIndex = useDerivedValue(
    () => translationX.value / CAR_ITEM_WIDTH
  );

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
