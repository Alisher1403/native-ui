import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg viewBox="0 0 24 24" fill={props.color} xmlns="http://www.w3.org/2000/svg" {...props}>
      <Path d="M11 20a1 1 0 002 0v-7h7a1 1 0 000-2h-7V4a1 1 0 00-2 0v7H4a1 1 0 000 2h7v7z" />
    </Svg>
  );
}

export default SvgComponent;
