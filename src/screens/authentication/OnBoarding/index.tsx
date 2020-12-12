import React from "react";
import Animated, {
  useAnimatedRef,
  useAnimatedScrollHandler,
  useDerivedValue,
  useSharedValue,
} from "react-native-reanimated";
import { Dimensions } from "react-native";

import { AuthenticationNavigationProps } from "../../../routes/authentication";
import { Box } from "../../../theme";

import { useStyles } from "./styles";
import Welcome from "./components/Welcome";
import Slide from "./components/Slide";
import { slideData } from "./slideData";
import Footer from "./components/Footer";

const { width } = Dimensions.get("window");

const OnBoarding: React.FC<
  AuthenticationNavigationProps<"OnBoarding">
> = () => {
  const { containerStyles } = useStyles();
  const scrollViewRef = useAnimatedRef<Animated.ScrollView>();
  const translationX = useSharedValue(0);
  const currentIndex = useDerivedValue(() => translationX.value / width);
  const scrollHandler = useAnimatedScrollHandler((event) => {
    translationX.value = event.contentOffset.x;
  });

  return (
    <Box {...containerStyles}>
      <Animated.ScrollView
        ref={scrollViewRef}
        onScroll={scrollHandler}
        showsHorizontalScrollIndicator={false}
        horizontal
        snapToInterval={width}
        scrollEventThrottle={16}
      >
        {slideData.map(({ Icon, title, description }, index) => (
          <Slide
            key={index}
            {...{ Icon, index, title, description, translationX }}
          />
        ))}
        <Welcome {...{ currentIndex, scrollViewRef }} />
      </Animated.ScrollView>
      <Footer {...{ currentIndex, scrollViewRef }} />
    </Box>
  );
};

export default OnBoarding;
