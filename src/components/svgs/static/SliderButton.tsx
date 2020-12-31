import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

// Button by DinosoftLab from the Noun Project

export const SLIDER_BUTTON_WIDTH = 24;

const SliderButton: React.FC<SvgProps> = (props: SvgProps) => {
  return (
    <Svg width={SLIDER_BUTTON_WIDTH} height={27.42857142857143} viewBox="0 0 42 48" {...props}>
      <Path
        d="M33.78 48H8.22C3.688 48 0 44.312 0 39.78V8.221C0 3.688 3.688 0 8.22 0h25.56C38.312 0 42 3.688 42 8.221v31.56C42 44.312 38.312 48 33.78 48zM8.22 2A6.228 6.228 0 002 8.221v31.56A6.226 6.226 0 008.22 46h25.56c3.43 0 6.22-2.79 6.22-6.22V8.221C40 4.791 37.21 2 33.78 2H8.22z"
        fill="#a0a0b2"
      />
      <Path fill="#a0a0b2" d="M25 12.084h2v26h-2zM15 12.084h2v26h-2z" />
    </Svg>
  );
};

export default SliderButton;
