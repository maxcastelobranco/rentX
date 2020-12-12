import React from "react";
import Animated, {
  Extrapolate,
  interpolate,
  runOnUI,
  scrollTo,
  useAnimatedStyle,
} from "react-native-reanimated";
import { RectButton } from "react-native-gesture-handler";
import { useTheme } from "@shopify/restyle";
import { useNavigation } from "@react-navigation/native";

import { Box, Text, Theme } from "../../../../../theme";
import LogoAnimation from "../../../../../components/animated/LogoAnimation";

import { useStyles } from "./styles";

interface WelcomeProps {
  currentIndex: Animated.SharedValue<number>;
  scrollViewRef: React.RefObject<Animated.ScrollView>;
}

const Welcome: React.FC<WelcomeProps> = ({ currentIndex, scrollViewRef }) => {
  const theme = useTheme<Theme>();
  const {
    containerStyles,
    titleStyles,
    descriptionStyles,
    buttonsContainerStyles,
    buttonTextStyles,
    loginButtonStyles,
    signUpButtonStyles,
    goBackButtonTextStyles,
    goBackButtonStyles,
  } = useStyles();
  const navigation = useNavigation();
  const inputRange = [1, 2];
  const animatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      currentIndex.value,
      inputRange,
      [0, 1],
      Extrapolate.CLAMP
    ),
  }));

  const goBack = () => {
    runOnUI(() => {
      "worklet";
      scrollTo(scrollViewRef, 0, 0, true);
    })();
  };
  const navigateToLogin = () => {
    navigation.navigate("Login");
  };
  const navigateToSignUp = () => {
    navigation.navigate("SignUp");
  };

  return (
    <Animated.View style={[containerStyles, animatedStyle]}>
      <LogoAnimation loop top={theme.spacing.xxl * 2} />
      <Text {...titleStyles}>Welcome</Text>
      <Text {...descriptionStyles}>What action do you wish to perform?</Text>
      <Box {...buttonsContainerStyles}>
        <RectButton style={loginButtonStyles} onPress={navigateToLogin}>
          <Text {...buttonTextStyles}>Login</Text>
        </RectButton>
        <RectButton style={signUpButtonStyles} onPress={navigateToSignUp}>
          <Text {...buttonTextStyles}>SignUp</Text>
        </RectButton>
      </Box>
      <RectButton style={goBackButtonStyles} onPress={goBack}>
        <Text {...goBackButtonTextStyles}>Go back</Text>
      </RectButton>
    </Animated.View>
  );
};

export default Welcome;
