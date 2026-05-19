import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg viewBox="0 0 24 24" fill={props.color} xmlns="http://www.w3.org/2000/svg" {...props}>
      <Path d="M10.92 2.868a1.25 1.25 0 012.16 0l2.795 4.798 5.428 1.176a1.25 1.25 0 01.667 2.054l-3.7 4.141.56 5.525a1.25 1.25 0 01-1.748 1.27L12 19.592l-5.082 2.24a1.249 1.249 0 01-1.748-1.27l.56-5.525-3.7-4.14a1.25 1.25 0 01.667-2.055l5.428-1.176 2.795-4.798z" />
    </Svg>
  );
}

export default SvgComponent;
