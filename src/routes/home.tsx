import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import React from "react";
import { CompositeNavigationProp, RouteProp } from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

import CalendarScreen from "../screens/home/CalendarScreen";

import TabsNavigator, { TabRoutes } from "./tabs";

export type HomeRoutes = {
  CalendarScreen: undefined;
  EditProfile: undefined;
  CarDetails: undefined;
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
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
