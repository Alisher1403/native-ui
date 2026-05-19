import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" fill={props.color} viewBox="0 0 16 16" {...props}>
      <Path d="M11 1a1 1 0 011 1v12a1 1 0 01-1 1H5a1 1 0 01-1-1V2a1 1 0 011-1zM5 0a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V2a2 2 0 00-2-2z" />
      <Path d="M8 14a1 1 0 100-2 1 1 0 000 2" />
    </Svg>
  );
}

export default SvgComponent;
