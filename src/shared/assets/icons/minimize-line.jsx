import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg viewBox="0 0 24 24" fill={props.color} xmlns="http://www.w3.org/2000/svg" {...props}>
      <Path fillRule="evenodd" clipRule="evenodd" d="M3 12a1 1 0 011-1h16a1 1 0 010 2H4a1 1 0 01-1-1z" />
    </Svg>
  );
}

export default SvgComponent;
