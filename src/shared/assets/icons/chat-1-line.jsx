import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg viewBox="0 0 24 24" fill={props.color} xmlns="http://www.w3.org/2000/svg" {...props}>
      <Path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10H4a2 2 0 01-2-2v-8C2 6.477 6.477 2 12 2zm0 2a8 8 0 00-8 8v8h8a8 8 0 000-16zm0 10a1 1 0 01.117 1.993L12 16H9a1 1 0 01-.117-1.993L9 14h3zm3-4a1 1 0 010 2H9a1 1 0 010-2h6z" />
    </Svg>
  );
}

export default SvgComponent;
