import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";

const Logo: React.FC<SvgProps> = (props: SvgProps) => {
  return (
    <Svg width={180} height={20} viewBox="0 0 180 20" fill="none" {...props}>
      <G clipPath="url(#prefix__clip0)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M69.432.396H38.517v3.836h30.915V.396zm0 7.876H38.517v3.836h30.915V8.272zm-30.915 7.876h30.915v3.836H38.517v-3.836zM112.135.396h30.914v3.836h-30.914V.396zm17.164 19.588V7.004l-.169.084-3.076 1.536v11.36h3.245z"
          fill="#E1E1E6"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M149.363.556l11.412 5.688-4.145 2.068-7.592-3.784V.396l.325.16zm30.59 15.248v4.132l-11.707-5.832 4.141-2.068 7.566 3.768zm0-11.272V.4l-.322.156-15.12 7.548h-.004l-4.141 2.072-11.328 5.652v4.136l15.473-7.724 4.141-2.068 11.301-5.64z"
          fill="#DC1637"
        />
        <Path
          d="M3.245 20H0v-3.452c.002-4.28 1.44-8.384 3.999-11.412C6.558 2.11 10.029.406 13.649.4h18.89v3.836h-18.89c-2.758.004-5.402 1.3-7.352 3.606-1.95 2.305-3.048 5.43-3.052 8.69V20z"
          fill="#E1E1E6"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M76.793.394h-3.175v.921l-.001.986V20h3.245V4.909l2.79 1.454 24.902 13.614v.007h.012l.03.016h3.205v-3.088l-.002-.001v-6.819l-.006.003V.4h-3.244v14.833l-2.062-1.057L76.793.394z"
          fill="#E1E1E6"
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path fill="#fff" d="M0 0h180v20H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default Logo;
