import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const Union: React.FC<SvgProps> = (props: SvgProps) => {
  return (
    <Svg width={80} height={50} viewBox="0 0 80 50" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.84.409l29.533 14.534-10.725 5.284L0 10.558V0l.84.409zM80 39.37v10.558L49.705 35.027l10.717-5.284L80 39.37zm0-28.803V.01l-.832.399L40.04 19.695h-.008L29.314 24.99 0 39.432V50l40.04-19.736 10.716-5.285L80 10.57z"
        fill="#DC1637"
      />
    </Svg>
  );
};

export default Union;
