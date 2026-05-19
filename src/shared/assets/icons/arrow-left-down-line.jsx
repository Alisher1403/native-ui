import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg viewBox="0 0 24 24" fill={props.color} xmlns="http://www.w3.org/2000/svg" {...props}>
      <Path d="M8.414 17l9.95-9.95a1 1 0 00-1.414-1.414L7 15.586V10a1 1 0 00-2 0v8a1 1 0 001 1h8a1 1 0 000-2H8.414z" />
    </Svg>
  );
}

export default SvgComponent;
