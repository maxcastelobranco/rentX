import React from "react";
import Animated, { useAnimatedScrollHandler } from "react-native-reanimated";
import { BoxProps } from "@shopify/restyle";

import { Box, Colors, Theme } from "../../../../theme";
import { CAR_ITEM_WIDTH } from "../../tabs/Home/components/Results/constants";
import ProgressIndicator from "../../../../components/animated/ProgressIndicator";

import AnimatedImage from "./components/AnimatedImage";
import { useStyles } from "./styles";

interface CarImagesProps {
  imageUris: string[];
  translationX: Animated.SharedValue<number>;
  currentIndex: Animated.SharedValue<number>;
  imageWidth: number;
  imageHeight: number;
  progressIndicatorContainerStyles: BoxProps<Theme>;
  progressIndicatorBackgroundColor?: Colors;
}

const CarImages: React.FC<CarImagesProps> = ({
  imageUris,
  translationX,
  currentIndex,
  imageWidth,
  imageHeight,
  progressIndicatorContainerStyles,
  progressIndicatorBackgroundColor,
}) => {
  const { carListStyles } = useStyles();

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
          <AnimatedImage
            key={uri}
            width={imageWidth}
            height={imageHeight}
            {...{ index, currentIndex, uri }}
          />
        ))}
      </Animated.ScrollView>
      <Box {...progressIndicatorContainerStyles}>
        {imageUris.map((_, index) => (
          <ProgressIndicator
            key={index}
            backgroundColor={progressIndicatorBackgroundColor}
            {...{ index, currentIndex }}
          />
        ))}
      </Box>
    </>
  );
};

export default CarImages;
