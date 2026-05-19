import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg viewBox="0 0 24 24" fill={props.color} xmlns="http://www.w3.org/2000/svg" {...props}>
      <Path d="M20 6a2 2 0 012 2v11.333a2 2 0 01-2 2H7a2 2 0 01-2-2V8a2 2 0 012-2h13zm-8.268 7.944L7.136 18.54l-.066.06-.07.054v.68h13v-.68l-.07-.053-.066-.06-2.24-2.24-.353.354.055.055a1 1 0 01-1.32 1.497l-.094-.083-4.18-4.18zM17 3a2 2 0 011.995 1.85L19 5H5a1 1 0 00-.993.883L4 6v12a2 2 0 01-1.995-1.85L2 16V6a3 3 0 012.824-2.995L5 3h12zm3 5H7v7.848L10.848 12a1.251 1.251 0 011.768 0l3.241 3.24.884-.883a1.251 1.251 0 011.768 0L20 15.848V8zm-3.5 1.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" />
    </Svg>
  );
}

export default SvgComponent;
