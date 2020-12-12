import React, { useCallback, useEffect, useState } from "react";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import { InitialState, NavigationContainer } from "@react-navigation/native";
import Constants from "expo-constants";
import AsyncStorage from "@react-native-community/async-storage";
import { runOnJS, useSharedValue, withTiming } from "react-native-reanimated";

import Splash from "../../screens/splash";
import { SPLASH_ANIMATION_DURATION } from "../animated/LogoAnimation";

const NAVIGATION_STATE_KEY = `NAVIGATION_STATE_KEY-${Constants.manifest.sdkVersion}`;

export type FontSource = Parameters<typeof Font.loadAsync>[0];
const usePromiseAll = (promises: Promise<Asset[] | void>[], cb: () => void) =>
  useEffect(() => {
    (async () => {
      await Promise.all(promises);
      cb();
    })();
  });

const useLoadAssets = (assets: number[], fonts: FontSource): boolean => {
  const [ready, setReady] = useState(false);
  usePromiseAll(
    [Font.loadAsync(fonts), ...assets.map((asset) => Asset.loadAsync(asset))],
    () => setReady(true)
  );
  return ready;
};

interface LoadAssetsProps {
  fonts?: FontSource;
  assets?: number[];
}

const LoadAssets: React.FC<LoadAssetsProps> = ({ assets, fonts, children }) => {
  const [isNavigationReady, setIsNavigationReady] = useState(!__DEV__);
  const [initialState, setInitialState] = useState<InitialState | undefined>();
  const ready = useLoadAssets(assets || [], fonts || {});
  const splashOpacity = useSharedValue(1);

  useEffect(() => {
    const setIsNavigationReadyTrue = () => {
      setIsNavigationReady(true);
    };

    const restoreState = async () => {
      try {
        const savedStateString = await AsyncStorage.getItem(
          NAVIGATION_STATE_KEY
        );
        const state = savedStateString
          ? JSON.parse(savedStateString)
          : undefined;
        setInitialState(state);
      } finally {
        setTimeout(() => {
          splashOpacity.value = withTiming(0, {}, () => {
            runOnJS(setIsNavigationReadyTrue)();
          });
        }, SPLASH_ANIMATION_DURATION * 4);
      }
    };

    if (!isNavigationReady) {
      restoreState().catch(console.warn);
    }
  }, [isNavigationReady, splashOpacity]);
  const onStateChange = useCallback(
    (state) =>
      AsyncStorage.setItem(NAVIGATION_STATE_KEY, JSON.stringify(state)),
    []
  );
  if (!ready || !isNavigationReady) {
    return <Splash opacity={splashOpacity} />;
  }
  return (
    <NavigationContainer {...{ onStateChange, initialState }}>
      {children}
    </NavigationContainer>
  );
};

export default LoadAssets;
