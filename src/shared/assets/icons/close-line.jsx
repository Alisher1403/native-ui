import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg viewBox="0 0 24 24" fill={props.color} xmlns="http://www.w3.org/2000/svg" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 13.414l5.657 5.657a1 1 0 001.414-1.414L13.414 12l5.657-5.657a1 1 0 00-1.414-1.414L12 10.586 6.343 4.929A1 1 0 004.93 6.343L10.586 12l-5.657 5.657a1 1 0 101.414 1.414L12 13.414z"
      />
    </Svg>
  );
}

export default SvgComponent;
