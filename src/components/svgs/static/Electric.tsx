import * as React from "react";
import Svg, { SvgProps, Path, Defs, ClipPath, G } from "react-native-svg";

const Electric: React.FC<SvgProps> = (props: SvgProps) => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <G clipPath="url(#prefix__clip0)">
        <Path
          d="M12.526 8H22L10.421 25v-9H2L12.526-1v9zm-2.105 2V6.22L5.718 14h6.808v4.394L18.066 10h-7.645z"
          fill="#3D3D4D"
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default Electric;
