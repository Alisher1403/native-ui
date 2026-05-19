import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg viewBox="0 0 24 24" fill={props.color} xmlns="http://www.w3.org/2000/svg" {...props}>
      <Path d="M14 3a3 3 0 013 3h3a2 2 0 012 2v11a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h3a3 3 0 013-3h4zm-3 9H4v7h16v-7h-7v1a1 1 0 01-1.993.117L11 13v-1zm9-4H4v2h16V8zm-6-3h-4a1 1 0 00-.993.883L9 6h6a1 1 0 00-.883-.993L14 5z" />
    </Svg>
  );
}

export default SvgComponent;
