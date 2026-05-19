import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg viewBox="0 0 24 24" fill={props.color} xmlns="http://www.w3.org/2000/svg" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.5 2a8.5 8.5 0 105.262 15.176l3.652 3.652a1 1 0 001.414-1.414l-3.652-3.652A8.501 8.501 0 0010.5 2zM4 10.5a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"
      />
    </Svg>
  );
}

export default SvgComponent;
