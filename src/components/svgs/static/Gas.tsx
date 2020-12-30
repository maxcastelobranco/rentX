import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const Gas: React.FC<SvgProps> = (props: SvgProps) => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M12 3.1L7.05 8.05a7 7 0 109.9 0L12 3.1zm0-2.828l6.364 6.364a9 9 0 11-12.728 0L12 .272z"
        fill="#3D3D4D"
      />
    </Svg>
  );
};

export default Gas;
