import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { useTheme } from "@shopify/restyle";

import { Theme } from "../../../../theme";

import { TabBarIconProps } from "./types";

const Calendar: React.FC<TabBarIconProps> = ({ focused, size, color }) => {
  const theme = useTheme<Theme>();

  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path
        d="M20.743 21.556H3.257a.221.221 0 01-.221-.221V5.665c0-.122.099-.221.221-.221h17.485c.122 0 .221.099.221.221v15.671a.22.22 0 01-.22.22zM8.204 2.444v6m7.889-6v6m-13.056 3h17.926"
        fill={focused ? theme.colors.primaryLight : "none"}
        stroke={focused ? color : theme.colors.backgroundDark4}
        strokeWidth={2}
        strokeMiterlimit={10}
      />
    </Svg>
  );
};

export default Calendar;
