import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import { useTheme } from "@shopify/restyle";

import { Theme } from "../../../../theme";

import { TabBarIconProps } from "./types";

const User: React.FC<TabBarIconProps> = ({ focused, size, color }) => {
  const theme = useTheme<Theme>();
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={focused ? theme.colors.primaryLight : "none"}
      stroke={focused ? color : theme.colors.backgroundDark4}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
      <Circle cx={12} cy={7} r={4} />
    </Svg>
  );
};

export default User;
