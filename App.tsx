import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "@shopify/restyle";

import LoadAssets from "./src/components/LoadAssets";
import { fonts } from "./assets/fonts";
import AppStackNavigator from "./src/routes";
import theme from "./src/theme";

const App: React.FC = () => {
  return (
    <ThemeProvider {...{ theme }}>
      <LoadAssets {...{ fonts }}>
        <StatusBar hidden style="light" />
        <AppStackNavigator />
      </LoadAssets>
    </ThemeProvider>
  );
};

export default App;
