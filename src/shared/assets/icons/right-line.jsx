import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg viewBox="0 0 24 24" fill={props.color} xmlns="http://www.w3.org/2000/svg" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.707 11.293a1 1 0 010 1.414l-5.657 5.657a1 1 0 11-1.414-1.414l4.95-4.95-4.95-4.95a1 1 0 011.414-1.414l5.657 5.657z"
      />
    </Svg>
  );
}

export default SvgComponent;
