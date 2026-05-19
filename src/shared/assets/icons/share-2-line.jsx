import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg viewBox="0 0 24 24" fill={props.color} xmlns="http://www.w3.org/2000/svg" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.5 2a3.5 3.5 0 11-2.506 5.943L11.67 10.21a5.001 5.001 0 010 3.58l4.324 2.267a3.5 3.5 0 11-.93 1.771l-4.475-2.346a5 5 0 110-6.963l4.475-2.347A3.5 3.5 0 0118.5 2zm0 15a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM7 9a3 3 0 100 6 3 3 0 000-6zm11.5-5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
      />
    </Svg>
  );
}

export default SvgComponent;
