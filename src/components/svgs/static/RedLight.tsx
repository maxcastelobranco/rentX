import * as React from "react";
import Svg, { SvgProps, Path, Circle } from "react-native-svg";

// Traffic signals by Vectors Market from the Noun Project

const ASPECT_RATIO = 14 / 16;
const WIDTH = 80;

const RedLight: React.FC<SvgProps> = (props: SvgProps) => {
  return (
    <Svg
      width={WIDTH}
      height={WIDTH / ASPECT_RATIO}
      viewBox="0 0 14 16"
      {...props}
    >
      <Path
        d="M14 11h-3v-1h1l2-4h-3V5h1l2-4h-3V0H3v1H0l2 4h1v1H0l2 4h1v1H0l2 4h1v1h8v-1h1l2-4zm-7 4c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm0-5.1c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM7 5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
        fill="#3d3d4d"
      />
      <Circle cx={7} cy={2.95} r={1.75} fill="#dc1637" />
    </Svg>
  );
};

export default RedLight;
