import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const LongArrow: React.FC<SvgProps> = (props: SvgProps) => {
  return (
    <Svg width={40} height={16} viewBox="0 0 40 16" fill="none" {...props}>
      <Path
        d="M37.512 7.357L34.025 3.91l.92-.909L40 8l-5.056 5-.919-.909 3.487-3.448H0V7.357h37.512z"
        fill="#7A7A80"
      />
    </Svg>
  );
};

export default LongArrow;
