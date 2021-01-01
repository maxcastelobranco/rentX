import * as React from "react";
import Svg, { Circle, G, Path } from "react-native-svg";
import { useTheme } from "@shopify/restyle";

import { Theme } from "../../../../theme";

import { TabBarIconProps } from "./types";

const Car: React.FC<TabBarIconProps> = ({ focused, size, color }) => {
  const theme = useTheme<Theme>();

  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <G
        fill={focused ? theme.colors.primaryLight : "none"}
        stroke={focused ? color : theme.colors.backgroundDark4}
        strokeWidth={2}
        strokeMiterlimit={10}
      >
        <Path d="M3 10.499h18v7H3zM4 20.375v-2.753a.123.123 0 00-.124-.122h-.752a.123.123 0 00-.124.124v2.753c0 .067.055.123.124.123h.753A.124.124 0 004 20.375z" />
        <Path d="M21 20.375v-2.753a.124.124 0 00-.124-.124h-.753a.126.126 0 00-.123.126v2.753c0 .068.055.124.124.124h.753a.126.126 0 00.123-.126zM16.024 3.499H7.976A4.976 4.976 0 003 8.475v2.024h18V8.475a4.976 4.976 0 00-4.976-4.976z" />
        <Circle
          cx={6.5}
          cy={14.01}
          r={0.51}
          strokeLinecap="round"
          fill="#3d3d4d"
        />
        <Circle
          cx={17.5}
          cy={14.01}
          r={0.51}
          strokeLinecap="round"
          fill="#3d3d4d"
        />
      </G>
    </Svg>
  );
};

export default Car;
