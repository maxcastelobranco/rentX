import React from "react";
import { Dimensions, Pressable } from "react-native";
import {
  PinchGestureHandler,
  PinchGestureHandlerGestureEvent,
  RectButton,
} from "react-native-gesture-handler";
import Animated, {
  Easing,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { useTheme } from "@shopify/restyle";
import { Feather } from "@expo/vector-icons";
import { mix } from "react-native-redash";

import responsivePixelSize from "../../../../../../../../utils/responsivePixelSize";
import { Theme } from "../../../../../../../../theme";

import { useStyles } from "./styles";

interface AvatarProps {
  isImageFullScreen: boolean;
  setIsImageFullScreen: React.Dispatch<React.SetStateAction<boolean>>;
  isImageFullScreenTimingTransition: Animated.SharedValue<number>;
  avatarUrl: string;
  buttonsContainerHeight: number;
}

const { width, height } = Dimensions.get("window");
const IMAGE_SIZE = responsivePixelSize(220);

const timingConfig: Animated.WithTimingConfig = {
  duration: 750,
  easing: Easing.bezier(0.16, 1, 0.3, 1),
};

const Avatar: React.FC<AvatarProps> = ({
  isImageFullScreen,
  setIsImageFullScreen,
  isImageFullScreenTimingTransition,
  avatarUrl,
  buttonsContainerHeight,
}) => {
  const theme = useTheme<Theme>();
  const { avatarStyles } = useStyles();
  const imageWidth = useSharedValue(IMAGE_SIZE);
  const imageHeight = useSharedValue(IMAGE_SIZE);
  const scale = useSharedValue(1);

  const onPinchGestureEvent = useAnimatedGestureHandler<PinchGestureHandlerGestureEvent>(
    {
      onActive: (event) => {
        scale.value = event.scale;
      },
      onEnd: () => {
        scale.value = withSpring(1);
      },
    }
  );

  const animatedImageStyle = useAnimatedStyle(() => {
    return {
      width: imageWidth.value,
      height: imageHeight.value,
      borderRadius: mix(
        isImageFullScreenTimingTransition.value,
        IMAGE_SIZE / 2,
        0
      ),
      transform: [
        {
          translateY: mix(
            isImageFullScreenTimingTransition.value,
            0,
            -buttonsContainerHeight - theme.spacing.l
          ),
        },
        { scale: scale.value },
      ],
    };
  });
  const animatedCloseImageButtonStyle = useAnimatedStyle(() => {
    return {
      opacity: mix(isImageFullScreenTimingTransition.value, 0, 1),
      transform: [
        { scale: mix(isImageFullScreenTimingTransition.value, 0, 1) },
      ],
    };
  });

  const toggleFullScreenImage = () => {
    setIsImageFullScreen((prevState) => !prevState);

    imageWidth.value = withTiming(
      imageWidth.value === IMAGE_SIZE ? width : IMAGE_SIZE,
      timingConfig
    );
    imageHeight.value = withTiming(
      imageWidth.value === IMAGE_SIZE ? height : IMAGE_SIZE,
      timingConfig
    );
  };
  const closeImage = () => {
    setIsImageFullScreen(false);

    imageWidth.value = withTiming(IMAGE_SIZE, timingConfig);
    imageHeight.value = withTiming(IMAGE_SIZE, timingConfig);
  };

  return (
    <Pressable onPress={toggleFullScreenImage} disabled={isImageFullScreen}>
      <PinchGestureHandler
        onGestureEvent={onPinchGestureEvent}
        enabled={isImageFullScreen}
      >
        <Animated.Image
          resizeMode="cover"
          source={{ uri: avatarUrl }}
          style={[avatarStyles, animatedImageStyle]}
        />
      </PinchGestureHandler>
      <Animated.View
        style={[
          {
            position: "absolute",
            top: -buttonsContainerHeight,
            right: 0,
          },
          animatedCloseImageButtonStyle,
        ]}
      >
        <RectButton onPress={closeImage}>
          <Feather name="x-square" size={48} color="#fff" />
        </RectButton>
      </Animated.View>
    </Pressable>
  );
};

export default Avatar;
