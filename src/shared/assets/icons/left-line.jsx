import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg viewBox="0 0 24 24" fill={props.color} xmlns="http://www.w3.org/2000/svg" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.293 12.707a1 1 0 010-1.414l5.657-5.657a1 1 0 111.414 1.414L10.414 12l4.95 4.95a1 1 0 01-1.414 1.414l-5.657-5.657z"
      />
    </Svg>
  );
}

export default SvgComponent;
