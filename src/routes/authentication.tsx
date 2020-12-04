import React from "react";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import { CompositeNavigationProp, RouteProp } from "@react-navigation/native";

import OnBoarding from "../screens/authentication/OnBoarding";

import { HomeRoutes } from "./home";

export type AuthenticationRoutes = {
  OnBoarding: undefined;
  Login: undefined;
  SignUp: undefined;
};

export interface AuthenticationNavigationProps<
  RouteName extends keyof AuthenticationRoutes
> {
  navigation: CompositeNavigationProp<
    StackNavigationProp<AuthenticationRoutes, RouteName>,
    StackNavigationProp<HomeRoutes, "Home">
  >;
  route: RouteProp<AuthenticationRoutes, RouteName>;
}

const AuthenticationStack = createStackNavigator<AuthenticationRoutes>();

const AuthenticationNavigator: React.FC = () => {
  return (
    <AuthenticationStack.Navigator headerMode="none">
      <AuthenticationStack.Screen name="OnBoarding" component={OnBoarding} />
    </AuthenticationStack.Navigator>
  );
};

export default AuthenticationNavigator;