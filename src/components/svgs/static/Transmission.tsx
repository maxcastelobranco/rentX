import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const Transmission: React.FC<SvgProps> = (props: SvgProps) => {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.857 2H6v28h2.857V17.445h5.714V30h2.858V17.445H26V2h-2.857v12.555h-5.714V2H14.57v12.555H8.857V2z"
        fill="#47474D"
      />
    </Svg>
  );
};

export default Transmission;
