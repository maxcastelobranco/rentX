import {
  CompositeNavigationProp,
  useFocusEffect,
} from "@react-navigation/native";
import { BackHandler } from "react-native";
import React from "react";

import { HomeRoutes } from "../routes/home";
import { TabRoutes } from "../routes/tabs";

export const usePreventGoingBack = (
  destiny: keyof HomeRoutes | keyof TabRoutes,
  navigation: CompositeNavigationProp<any, any>
) => {
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        navigation.navigate(destiny);
        return true;
      };

      BackHandler.addEventListener("hardwareBackPress", onBackPress);

      return () =>
        BackHandler.removeEventListener("hardwareBackPress", onBackPress);
    }, [destiny, navigation])
  );
};
