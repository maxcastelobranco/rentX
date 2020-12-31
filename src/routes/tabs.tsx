import { CompositeNavigationProp, RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { BottomTabNavigationProp, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";

import Listing from "../screens/home/tabs/Listing";
import Scheduling from "../screens/home/tabs/Scheduling";
import Home from "../screens/home/tabs/Home";
import Profile from "../screens/home/tabs/Profile";
import TabBar from "../screens/home/tabs/components/TabBar";
import House from "../components/svgs/animated/tabIcons/House";
import Car from "../components/svgs/animated/tabIcons/Car";
import Calendar from "../components/svgs/animated/tabIcons/Calendar";
import User from "../components/svgs/animated/tabIcons/User";

import { HomeRoutes } from "./home";

export type TabRoutes = {
  Home: undefined;
  Listing: undefined;
  Scheduling: undefined;
  Profile: undefined;
};

export interface TabNavigationProps<RouteName extends keyof TabRoutes> {
  navigation: CompositeNavigationProp<
    BottomTabNavigationProp<TabRoutes, RouteName>,
    StackNavigationProp<HomeRoutes, "CalendarScreen">
  >;
  route: RouteProp<TabRoutes, RouteName>;
}

const Tabs = createBottomTabNavigator<TabRoutes>();

const TabsNavigator: React.FC = () => {
  return (
    <Tabs.Navigator lazy={false} tabBar={(props) => <TabBar {...props} />}>
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: (props) => <House {...props} />,
        }}
      />
      <Tabs.Screen
        name="Listing"
        component={Listing}
        options={{
          tabBarIcon: (props) => <Car {...props} />,
        }}
      />
      <Tabs.Screen
        name="Scheduling"
        component={Scheduling}
        options={{
          tabBarIcon: (props) => <Calendar {...props} />,
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: (props) => <User {...props} />,
        }}
      />
    </Tabs.Navigator>
  );
};

export default TabsNavigator;
