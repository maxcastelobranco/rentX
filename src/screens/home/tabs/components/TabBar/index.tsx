import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import React from "react";

import { Box } from "../../../../../theme";

import Tab from "./components/Tab";
import FocusIndicator from "./components/FocusIndicator";
import { useStyles } from "./styles";

const TabBar: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const { containerStyles } = useStyles();

  const { index: stateIndex } = state;
  const focusedOptions = descriptors[state.routes[stateIndex].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <Box {...containerStyles}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const { tabBarIcon } = options;

        const isFocused = stateIndex === index;
        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <Tab
            key={index}
            {...{ isFocused, onPress, tabBarIcon, stateIndex }}
          />
        );
      })}
      <FocusIndicator {...{ stateIndex }} />
    </Box>
  );
};

export default TabBar;
