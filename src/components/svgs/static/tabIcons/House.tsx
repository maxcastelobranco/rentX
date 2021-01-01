import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { useTheme } from "@shopify/restyle";

import { Theme } from "../../../../theme";

import { TabBarIconProps } from "./types";

const House: React.FC<TabBarIconProps> = ({ focused, size, color }) => {
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
      <Path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <Path d="M9 22V12h6v10" />
    </Svg>
  );
};

export default House;
