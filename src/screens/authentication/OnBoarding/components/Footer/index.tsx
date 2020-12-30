import React from "react";
import Animated, {
  interpolate,
  runOnUI,
  scrollTo,
  useAnimatedStyle,
  Extrapolate,
} from "react-native-reanimated";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "@shopify/restyle";
import { RectButton } from "react-native-gesture-handler";
import { Dimensions } from "react-native";

import { Box, Theme } from "../../../../../theme";
import { slideData } from "../../slideData";
import responsivePixelSize from "../../../../../utils/responsivePixelSize";
import ProgressIndicator from "../../../../../components/animated/ProgressIndicator";

import { useStyles } from "./styles";

interface FooterProps {
  currentIndex: Animated.SharedValue<number>;
  scrollViewRef: React.RefObject<Animated.ScrollView>;
}

const ICON_SIZE = responsivePixelSize(24);

const { width } = Dimensions.get("window");

const Footer: React.FC<FooterProps> = ({ currentIndex, scrollViewRef }) => {
  const theme = useTheme<Theme>();
  const {
    containerStyles,
    progressIndicatorContainerStyles,
    buttonStyles,
  } = useStyles();
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            currentIndex.value,
            [1, 2],
            [0, 100],
            Extrapolate.CLAMP
          ),
        },
      ],
    };
  });

  const onPress = () => {
    runOnUI(() => {
      "worklet";
      scrollTo(scrollViewRef, width * (currentIndex.value + 1), 0, true);
    })();
  };

  return (
    <Animated.View style={animatedStyle}>
      <Box {...containerStyles}>
        <Box {...progressIndicatorContainerStyles}>
          {slideData.map((_, index) => (
            <ProgressIndicator key={index} {...{ index, currentIndex }} />
          ))}
        </Box>
        <RectButton style={buttonStyles} {...{ onPress }}>
          <Feather
            name="chevron-right"
            size={ICON_SIZE}
            color={theme.colors.textMediumLight1}
          />
        </RectButton>
      </Box>
    </Animated.View>
  );
};

export default Footer;
