import React, { useEffect } from "react";
import Animated, { useAnimatedStyle } from "react-native-reanimated";
import AsyncStorage from "@react-native-community/async-storage";

import LogoAnimation from "../../components/animated/LogoAnimation";
import { AuthenticationActionTypes } from "../../context/reducers/authenticationReducer";
import { useAppContext } from "../../context";

import { useStyles } from "./styles";

interface SplashProps {
  opacity: Animated.SharedValue<number>;
}

const Splash: React.FC<SplashProps> = ({ opacity }) => {
  const { dispatch } = useAppContext();
  const { containerStyles } = useStyles();

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  useEffect(() => {
    AsyncStorage.getItem("@rentX:user").then((user) => {
      if (user) {
        dispatch({
          type: AuthenticationActionTypes.UpdateUser,
          payload: JSON.parse(user),
        });
      }
    });
  }, [dispatch]);

  return (
    <Animated.View style={[containerStyles, animatedStyle]}>
      <LogoAnimation />
    </Animated.View>
  );
};

export default Splash;
