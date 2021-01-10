import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { useAppContext } from "../context";

import AuthenticationNavigator from "./authentication";
import HomeNavigator from "./home";

export type AppRoutes = {
  Authentication: undefined;
  Home: undefined;
};

const AppStack = createStackNavigator<AppRoutes>();

const AppStackNavigator: React.FC = () => {
  const { state } = useAppContext();

  return (
    <>
      {state.authentication.user.id.length ? (
        <AppStack.Navigator headerMode="none">
          <AppStack.Screen name="Home" component={HomeNavigator} />
        </AppStack.Navigator>
      ) : (
        <AppStack.Navigator headerMode="none">
          <AppStack.Screen
            name="Authentication"
            component={AuthenticationNavigator}
          />
        </AppStack.Navigator>
      )}
    </>
  );
};

export default AppStackNavigator;
