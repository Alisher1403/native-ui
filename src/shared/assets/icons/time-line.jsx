import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg viewBox="0 0 24 24" fill={props.color} xmlns="http://www.w3.org/2000/svg" {...props}>
      <Path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 100 16 8 8 0 000-16zm0 2a1 1 0 01.993.883L13 7v4.586l2.707 2.707a1 1 0 01-1.32 1.497l-.094-.083-3-3a1 1 0 01-.284-.576L11 12V7a1 1 0 011-1z" />
    </Svg>
  );
}

export default SvgComponent;
