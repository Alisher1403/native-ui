import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg viewBox="0 0 24 24" fill={props.color} xmlns="http://www.w3.org/2000/svg" {...props}>
      <Path d="M19 4a3 3 0 013 3v10a3 3 0 01-3 3H5a3 3 0 01-3-3V7a3 3 0 013-3h14zm1 6H4v7a1 1 0 00.883.993L5 18h14a1 1 0 00.993-.883L20 17v-7zm-3 3a1 1 0 01.117 1.993L17 15h-3a1 1 0 01-.117-1.993L14 13h3zm2-7H5a1 1 0 00-1 1v1h16V7a1 1 0 00-1-1z" />
    </Svg>
  );
}

export default SvgComponent;
