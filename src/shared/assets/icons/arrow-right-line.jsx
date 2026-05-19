import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg viewBox="0 0 24 24" fill={props.color} xmlns="http://www.w3.org/2000/svg" {...props}>
      <Path d="M14.707 5.636l5.657 5.657a1 1 0 010 1.414l-5.657 5.657a1 1 0 01-1.414-1.414l3.95-3.95H4a1 1 0 010-2h13.243l-3.95-3.95a1 1 0 111.414-1.414z" />
    </Svg>
  );
}

export default SvgComponent;
