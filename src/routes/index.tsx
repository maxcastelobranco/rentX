import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeNavigator from "./home";
import AuthenticationNavigator from "./authentication";

export type AppRoutes = {
  Authentication: undefined;
  Home: undefined;
};

const AppStack = createStackNavigator<AppRoutes>();

const AppStackNavigator: React.FC = () => {
  return (
    <AppStack.Navigator headerMode="none">
      <AppStack.Screen
        name="Authentication"
        component={AuthenticationNavigator}
      />
      <AppStack.Screen name="Home" component={HomeNavigator} />
    </AppStack.Navigator>
  );
};

export default AppStackNavigator;
