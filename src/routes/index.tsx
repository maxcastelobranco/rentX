import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-community/async-storage";

import { useAppContext } from "../context";
import { AuthenticationActionTypes } from "../context/reducers/authenticationReducer";
import { Box } from "../theme";
import Loading from "../components/static/Loading";

import HomeNavigator from "./home";
import AuthenticationNavigator from "./authentication";

export type AppRoutes = {
  Authentication: undefined;
  Home: undefined;
};

const AppStack = createStackNavigator<AppRoutes>();

const AppStackNavigator: React.FC = () => {
  const { dispatch } = useAppContext();
  const [loadingUser, setLoadingUser] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem("@proffy:user").then((user) => {
      if (user) {
        dispatch({
          type: AuthenticationActionTypes.UpdateUser,
          payload: JSON.parse(user),
        });
      }

      setLoadingUser(false);
    });
  }, [dispatch]);

  return (
    <>
      {loadingUser ? (
        <Box flex={1} alignItems="center" justifyContent="center">
          <Loading color="primary" />
        </Box>
      ) : (
        <AppStack.Navigator headerMode="none">
          <AppStack.Screen
            name="Authentication"
            component={AuthenticationNavigator}
          />
          <AppStack.Screen name="Home" component={HomeNavigator} />
        </AppStack.Navigator>
      )}
    </>
  );
};

export default AppStackNavigator;
