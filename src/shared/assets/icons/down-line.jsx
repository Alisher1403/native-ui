import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg viewBox="0 0 24 24" fill={props.color} xmlns="http://www.w3.org/2000/svg" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.707 15.707a1 1 0 01-1.414 0L5.636 10.05A1 1 0 117.05 8.636l4.95 4.95 4.95-4.95a1 1 0 011.414 1.414l-5.657 5.657z"
      />
    </Svg>
  );
}

export default SvgComponent;
