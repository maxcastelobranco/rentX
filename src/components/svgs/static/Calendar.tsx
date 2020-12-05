import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const Calendar: React.FC<SvgProps> = (props: SvgProps) => {
  return (
    <Svg width={80} height={80} viewBox="0 0 80 80" fill="none" {...props}>
      <Path
        d="M56.667 13.667H70A3.333 3.333 0 0173.333 17v53.333A3.333 3.333 0 0170 73.667H10a3.333 3.333 0 01-3.333-3.334V17A3.333 3.333 0 0110 13.667h13.333V7H30v6.667h20V7h6.667v6.667zM50 20.333H30V27h-6.667v-6.667h-10v13.334h53.334V20.333h-10V27H50v-6.667zm16.667 20H13.333V67h53.334V40.333z"
        fill="#DC1637"
      />
    </Svg>
  );
};

export default Calendar;
