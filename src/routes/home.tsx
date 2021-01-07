import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import React from "react";
import { CompositeNavigationProp, RouteProp } from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

import CalendarScreen from "../screens/home/CalendarScreen";
import { CarData } from "../context/reducers/carParamsReducer";
import CarDetails from "../screens/home/CarDetails";

import TabsNavigator, { TabRoutes } from "./tabs";

interface CarDetailsParams {
  data: CarData;
  currentImageIndex: number;
}

export type HomeRoutes = {
  CalendarScreen: undefined;
  EditProfile: undefined;
  CarDetails: CarDetailsParams;
  Tabs: undefined;
};

export type HomeNavigationProp<
  RouteName extends keyof HomeRoutes
> = CompositeNavigationProp<
  StackNavigationProp<HomeRoutes, RouteName>,
  BottomTabNavigationProp<TabRoutes, "Home">
>;

export interface HomeNavigationProps<RouteName extends keyof HomeRoutes> {
  navigation: HomeNavigationProp<RouteName>;
  route: RouteProp<HomeRoutes, RouteName>;
}

const HomeStack = createStackNavigator<HomeRoutes>();

const HomeNavigator: React.FC = () => {
  return (
    <HomeStack.Navigator headerMode="none">
      <HomeStack.Screen name="CalendarScreen" component={CalendarScreen} />
      <HomeStack.Screen name="Tabs" component={TabsNavigator} />
      <HomeStack.Screen name="CarDetails" component={CarDetails} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
