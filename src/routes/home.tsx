import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import React from "react";
import { CompositeNavigationProp, RouteProp } from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

import CalendarScreen from "../screens/home/CalendarScreen";

export type TabRoutes = {
  Home: undefined;
  Listing: undefined;
  Scheduling: undefined;
  Profile: undefined;
};

export type HomeRoutes = {
  CalendarScreen: undefined;
  EditProfile: undefined;
  CarDetails: undefined;
  Tabs: undefined;
};

export interface HomeNavigationProps<RouteName extends keyof HomeRoutes> {
  navigation: CompositeNavigationProp<
    StackNavigationProp<HomeRoutes, RouteName>,
    BottomTabNavigationProp<TabRoutes, "Home">
  >;
  route: RouteProp<HomeRoutes, RouteName>;
}

const HomeStack = createStackNavigator<HomeRoutes>();

const HomeNavigator: React.FC = () => {
  return (
    <HomeStack.Navigator headerMode="none">
      <HomeStack.Screen name="CalendarScreen" component={CalendarScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
