import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg viewBox="0 0 24 24" fill={props.color} xmlns="http://www.w3.org/2000/svg" {...props}>
      <Path d="M16.586 3A2 2 0 0118 3.586L20.414 6A2 2 0 0121 7.414V19a3 3 0 01-3 3H6a3 3 0 01-3-3V7.414A2 2 0 013.586 6L6 3.586A2 2 0 017.414 3h9.172zM19 9H5v10a1 1 0 001 1h12a1 1 0 001-1V9zm-4 2a1 1 0 011 1 4 4 0 11-8 0 1 1 0 112 0 2 2 0 003.995.15L14 12a1 1 0 011-1zm1.586-6H7.414l-2 2h13.172l-2-2z" />
    </Svg>
  );
}

export default SvgComponent;
