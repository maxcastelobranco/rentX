import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-community/async-storage";

import { AuthenticationActionTypes } from "../context/reducers/authenticationReducer";
import { useAppContext } from "../context";
import { Box } from "../theme";
import RedLight from "../components/svgs/static/RedLight";

import AuthenticationNavigator from "./authentication";
import HomeNavigator from "./home";

export type AppRoutes = {
  Authentication: undefined;
  Home: undefined;
};

const AppStack = createStackNavigator<AppRoutes>();

const AppStackNavigator: React.FC = () => {
  const { state, dispatch } = useAppContext();
  const [loadingUser, setLoadingUser] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem("@rentX:user").then((user) => {
      if (user) {
        dispatch({
          type: AuthenticationActionTypes.UpdateUser,
          payload: JSON.parse(user),
        });
        setLoadingUser(false);
      }
    });
    setLoadingUser(false);
  }, [dispatch]);

  return (
    <>
      {loadingUser ? (
        <Box flex={1} alignItems="center" justifyContent="center">
          <RedLight />
        </Box>
      ) : state.authentication.user.id.length ? (
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
