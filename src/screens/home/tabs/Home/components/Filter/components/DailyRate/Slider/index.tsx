import React, { useState } from "react";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";

import { Box } from "../../../../../../../../../theme";
import SliderButton, {
  SLIDER_BUTTON_WIDTH,
} from "../../../../../../../../../components/svgs/static/SliderButton";

import { useStyles } from "./styles";

interface SliderProps {
  startValue: Animated.SharedValue<number>;
  endValue: Animated.SharedValue<number>;
}

const Slider: React.FC<SliderProps> = ({ startValue, endValue }) => {
  const [maxWidth, setMaxWidth] = useState(-1);
  const {
    containerStyles,
    sliderButtonContainerStyles,
    redLineStyles,
    rightSideLineCoverStyles,
  } = useStyles(maxWidth);

  const translateXLeft = useSharedValue(0);
  const translateXRight = useSharedValue(0);

  const onGestureEventLeft = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    { offsetX: number }
  >({
    onStart: (_, context) => {
      context.offsetX = translateXLeft.value;
    },
    onActive: ({ translationX, velocityX }, { offsetX }) => {
      const dt = offsetX + translationX;
      const maxTranslation =
        maxWidth + translateXRight.value - SLIDER_BUTTON_WIDTH * 2;
      if (dt >= 0 && dt <= maxTranslation) {
        const scaleValue = Math.floor((10000 * dt) / maxWidth);
        startValue.value = scaleValue < 100 ? 0 : scaleValue;

        translateXLeft.value = withSpring(dt, { velocity: velocityX });
      }
    },
  });

  const onGestureEventRight = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    { offsetX: number }
  >({
    onStart: (_, context) => {
      context.offsetX = translateXRight.value;
    },
    onActive: ({ translationX, velocityX }, { offsetX }) => {
      const dt = offsetX + translationX;
      const absoluteDt = Math.abs(dt);
      const maxTranslation =
        maxWidth - translateXLeft.value - SLIDER_BUTTON_WIDTH * 2;
      if (dt <= 0 && absoluteDt <= maxTranslation) {
        const scaleValue = Math.floor(10000 - (10000 * absoluteDt) / maxWidth);
        endValue.value = scaleValue > 9900 ? 10000 : scaleValue;

        translateXRight.value = withSpring(dt, { velocity: velocityX });
      }
    },
  });

  const animatedStyleLeft = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateXLeft.value }],
    };
  });
  const animatedStyleRight = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateXRight.value }],
    };
  });
  const animatedRedLineStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateXLeft.value }],
    };
  });

  return (
    <Box
      onLayout={({
        nativeEvent: {
          layout: { width },
        },
      }) => {
        setMaxWidth(width);
      }}
      {...containerStyles}
    >
      <PanGestureHandler onGestureEvent={onGestureEventLeft}>
        <Animated.View style={[sliderButtonContainerStyles, animatedStyleLeft]}>
          <SliderButton />
        </Animated.View>
      </PanGestureHandler>
      <Animated.View style={[redLineStyles, animatedRedLineStyle]} />
      <PanGestureHandler onGestureEvent={onGestureEventRight}>
        <Animated.View
          style={[sliderButtonContainerStyles, animatedStyleRight]}
        >
          <SliderButton />
          <Box {...rightSideLineCoverStyles} />
        </Animated.View>
      </PanGestureHandler>
    </Box>
  );
};

export default Slider;
