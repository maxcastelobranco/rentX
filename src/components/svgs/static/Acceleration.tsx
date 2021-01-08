import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const Acceleration: React.FC<SvgProps> = (props: SvgProps) => {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M4 27.263h24V30H4v-2.737zM17.333 7.238v15.288h-2.666V7.238l-8.095 8.31-1.885-1.936L16 2l11.313 11.611-1.885 1.935-8.095-8.305v-.003z"
        fill="#47474D"
      />
    </Svg>
  );
};

export default Acceleration;
