import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const Logout: React.FC<SvgProps> = (props: SvgProps) => {
  return (
    <Svg width={48} height={48} viewBox="0 0 48 48" fill="none" {...props}>
      <Path
        d="M18.265 15.807l1.147 1.639a8 8 0 109.176 0l1.147-1.639A9.988 9.988 0 0134 24c0 5.523-4.477 10-10 10s-10-4.477-10-10a9.988 9.988 0 014.265-8.193zM23 24V14h2v10h-2z"
        fill="#AEAEB3"
      />
    </Svg>
  );
};

export default Logout;
