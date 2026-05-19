import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg viewBox="0 0 24 24" fill={props.color} xmlns="http://www.w3.org/2000/svg" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.192 5.465a1 1 0 010 1.414L9.95 18.122a1.1 1.1 0 01-1.556 0l-5.586-5.586a1 1 0 111.415-1.415l4.95 4.95L19.777 5.465a1 1 0 011.415 0z"
      />
    </Svg>
  );
}

export default SvgComponent;
