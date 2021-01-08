import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const Wheel: React.FC<SvgProps> = (props: SvgProps) => {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M16 2c7.732 0 14 6.268 14 14s-6.268 14-14 14S2 23.732 2 16 8.268 2 16 2zm-5.6 15.4l-5.513.001a11.205 11.205 0 009.713 9.712V21.6a4.2 4.2 0 01-4.2-4.2zm16.713.001L21.6 17.4a4.2 4.2 0 01-4.2 4.2l.001 5.513a11.205 11.205 0 009.712-9.712zM18.8 16h-5.6v1.4a1.4 1.4 0 001.4 1.4h2.8a1.4 1.4 0 001.4-1.4V16zM16 4.8a11.201 11.201 0 00-11.113 9.8H10.4a1.4 1.4 0 011.4-1.4h8.4a1.4 1.4 0 011.4 1.4h5.513A11.201 11.201 0 0016 4.8z"
        fill="#47474D"
      />
    </Svg>
  );
};

export default Wheel;
