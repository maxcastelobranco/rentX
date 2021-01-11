import React, { useState } from "react";
import Animated, { Easing, useAnimatedStyle } from "react-native-reanimated";
import { mix, useSpring, useTiming } from "react-native-redash";

import { Box, Text } from "../../../../theme";
import { TabNavigationProps } from "../../../../routes/tabs";
import { usePreventGoingBack } from "../../../../hooks/usePreventGoingBack";
import { useAppContext } from "../../../../context";

import Header from "./components/Header";
import { useStyles } from "./styles";

const timingConfig: Animated.WithTimingConfig = {
  duration: 1250,
  easing: Easing.bezier(0.16, 1, 0.3, 1),
};

const Profile: React.FC<TabNavigationProps<"Profile">> = ({ navigation }) => {
  usePreventGoingBack("CalendarScreen", navigation);
  const {
    state: {
      authentication: {
        user: { avatarUrl, firstName, lastName },
      },
    },
  } = useAppContext();
  const {
    userNameStyles,
    containerStyles,
    contentContainerStyles,
  } = useStyles();

  const [isImageFullScreen, setIsImageFullScreen] = useState(false);
  const isImageFullScreenTimingTransition = useTiming(
    isImageFullScreen,
    timingConfig
  );
  const isImageFullScreenSpringTransition = useSpring(isImageFullScreen);

  const animatedContentStyle = useAnimatedStyle(() => {
    return {
      flex: mix(isImageFullScreenTimingTransition.value, 1.2, 0),
      opacity: mix(isImageFullScreenTimingTransition.value, 1, 0),
      transform: [
        {
          translateY: mix(isImageFullScreenTimingTransition.value, 0, 20),
        },
      ],
    };
  });

  return (
    <Box {...containerStyles}>
      <Header
        {...{
          avatarUrl,
          isImageFullScreen,
          setIsImageFullScreen,
          isImageFullScreenTimingTransition,
          isImageFullScreenSpringTransition,
        }}
      />
      <Animated.View style={[contentContainerStyles, animatedContentStyle]}>
        <Text {...userNameStyles}>{`${firstName} ${lastName}`}</Text>
      </Animated.View>
    </Box>
  );
};

export default Profile;
