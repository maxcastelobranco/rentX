import React from "react";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import { CompositeNavigationProp, RouteProp } from "@react-navigation/native";

import OnBoarding from "../screens/authentication/OnBoarding";
import Login from "../screens/authentication/Login";
import SignUp from "../screens/authentication/SignUp";
import SignUpSuccessful from "../screens/authentication/SignUpSuccessful";

import HomeNavigator, { HomeRoutes } from "./home";

export type AuthenticationRoutes = {
  OnBoarding: undefined;
  Login: undefined;
  SignUp: undefined;
  SignUpSuccessful: undefined;
  Home: undefined;
};

export interface AuthenticationNavigationProps<
  RouteName extends keyof AuthenticationRoutes
> {
  navigation: CompositeNavigationProp<
    StackNavigationProp<AuthenticationRoutes, RouteName>,
    StackNavigationProp<HomeRoutes, "Calendar">
  >;
  route: RouteProp<AuthenticationRoutes, RouteName>;
}

const AuthenticationStack = createStackNavigator<AuthenticationRoutes>();

const AuthenticationNavigator: React.FC = () => {
  return (
    <AuthenticationStack.Navigator headerMode="none">
      <AuthenticationStack.Screen name="OnBoarding" component={OnBoarding} />
      <AuthenticationStack.Screen name="Login" component={Login} />
      <AuthenticationStack.Screen name="SignUp" component={SignUp} />
      <AuthenticationStack.Screen
        name="SignUpSuccessful"
        component={SignUpSuccessful}
      />
      <AuthenticationStack.Screen name="Home" component={HomeNavigator} />
    </AuthenticationStack.Navigator>
  );
};

export default AuthenticationNavigator;
