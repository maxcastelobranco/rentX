import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const BigCar: React.FC<SvgProps> = (props: SvgProps) => {
  return (
    <Svg width={80} height={80} viewBox="0 0 80 80" fill="none" {...props}>
      <Path
        d="M63.333 63.333H16.667v3.334A3.333 3.333 0 0113.333 70H10a3.333 3.333 0 01-3.333-3.333V33.333l8.266-19.293A6.667 6.667 0 0121.067 10h37.866a6.666 6.666 0 016.127 4.04l8.273 19.293v33.334A3.333 3.333 0 0170 70h-3.333a3.333 3.333 0 01-3.334-3.333v-3.334zM66.667 40H13.333v16.667h53.334V40zM13.92 33.333h52.16l-7.143-16.666h-37.87L13.92 33.333zm7.747 20a5 5 0 110-10 5 5 0 010 10zm36.666 0a5 5 0 110-10 5 5 0 010 10z"
        fill="#DC1637"
      />
    </Svg>
  );
};

export default BigCar;
