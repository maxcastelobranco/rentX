import React, { useState } from "react";
import Animated, { Easing } from "react-native-reanimated";
import { useSpring, useTiming } from "react-native-redash";

import { Box } from "../../../../theme";
import { TabNavigationProps } from "../../../../routes/tabs";
import { usePreventGoingBack } from "../../../../hooks/usePreventGoingBack";
import { useAppContext } from "../../../../context";

import Header from "./components/Header";
import { useStyles } from "./styles";
import Content from "./components/Content";

const timingConfig: Animated.WithTimingConfig = {
  duration: 1250,
  easing: Easing.bezier(0.16, 1, 0.3, 1),
};

const Profile: React.FC<TabNavigationProps<"Profile">> = ({ navigation }) => {
  usePreventGoingBack("CalendarScreen", navigation);
  const {
    state: {
      authentication: {
        user: { avatarUrl },
      },
    },
  } = useAppContext();
  const { containerStyles } = useStyles();

  const [isImageFullScreen, setIsImageFullScreen] = useState(false);
  const isImageFullScreenTimingTransition = useTiming(
    isImageFullScreen,
    timingConfig
  );
  const isImageFullScreenSpringTransition = useSpring(isImageFullScreen);

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
      <Content {...{ isImageFullScreenTimingTransition }} />
    </Box>
  );
};

export default Profile;
