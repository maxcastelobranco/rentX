import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "@shopify/restyle";
import { enableScreens } from "react-native-screens";

import LoadAssets from "./src/components/static/LoadAssets";
import { fonts } from "./assets/fonts";
import AppStackNavigator from "./src/routes";
import theme from "./src/theme";
import { AppProvider } from "./src/context";

enableScreens();

const App: React.FC = () => {
  return (
    <AppProvider>
      <ThemeProvider {...{ theme }}>
        <LoadAssets {...{ fonts }}>
          <StatusBar hidden style="light" />
          <AppStackNavigator />
        </LoadAssets>
      </ThemeProvider>
    </AppProvider>
  );
};

export default App;
