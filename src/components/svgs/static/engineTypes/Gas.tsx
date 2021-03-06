import { useTheme } from "@shopify/restyle";
import * as React from "react";
import Svg, { Path } from "react-native-svg";

import { Theme } from "../../../../theme";

import { EngineTypeIconProps } from "./types";

// Gasoline by Laymik from the Noun Project

const Gas: React.FC<EngineTypeIconProps> = ({ focused = false, ...rest }) => {
  const theme = useTheme<Theme>();
  return (
    <Svg
      width={24}
      height={29.25957031779144}
      viewBox="0 0 73.822 90"
      fill={
        rest.fill
          ? rest.fill
          : focused
          ? theme.colors.primary
          : theme.colors.textMediumLight1
      }
      {...rest}
    >
      <Path d="M73.822 16.59l-6.316 6.316-10.268-10.269 6.316-6.316L73.822 16.59zm-6.318 11.275v51.103C67.504 85.061 62.568 90 56.472 90h-45.44C4.939 90 0 85.061 0 78.968V7.727A7.73 7.73 0 017.731 0h30.916c.654 0 1.28.26 1.74.721l27.117 27.144zM14.671 4.922l6.543 7.734h24.149l-7.734-7.734H14.671zm38.651 48.523c0-10.874-8.814-19.688-19.687-19.688s-19.688 8.814-19.688 19.688 8.814 19.687 19.688 19.687 19.687-8.814 19.687-19.687zm-10.996 3.607a8.69 8.69 0 11-17.382 0c0-4.8 8.691-16.776 8.691-16.776s8.691 11.976 8.691 16.776zm-3.144-.07a1.055 1.055 0 10-2.11 0 3.313 3.313 0 01-3.309 3.309 1.055 1.055 0 10.001 2.109 5.424 5.424 0 005.418-5.418z" />
    </Svg>
  );
};

export default Gas;
