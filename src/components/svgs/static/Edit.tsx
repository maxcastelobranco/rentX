import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const Edit: React.FC<SvgProps> = (props: SvgProps) => {
  return (
    <Svg width={48} height={48} viewBox="0 0 48 48" fill="none" {...props}>
      <Path
        d="M17 31h1.414l9.314-9.314-1.414-1.414L17 29.586V31zm16 2H15v-4.243l13.435-13.435a1 1 0 011.414 0l2.829 2.83a1 1 0 010 1.413L21.243 31H33v2zm-5.272-14.142l1.414 1.414 1.414-1.414-1.414-1.414-1.414 1.414z"
        fill="#AEAEB3"
      />
    </Svg>
  );
};

export default Edit;
