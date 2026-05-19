import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg viewBox="0 0 24 24" fill={props.color} xmlns="http://www.w3.org/2000/svg" {...props}>
      <Path d="M9 20a1 1 0 110 2 1 1 0 010-2zm7 0a1 1 0 110 2 1 1 0 010-2zM2.2 2.9a1 1 0 011.295-.269l.105.07 1.708 1.28a2 2 0 01.653.848l.06.171h12.846a2 2 0 011.998 2.1l-.013.148-.457 3.655a5 5 0 01-4.32 4.34l-.226.023-7.313.61.26 1.124H17.5a1 1 0 01.117 1.993L17.5 19H8.796a2 2 0 01-1.906-1.393l-.043-.157-2.74-11.87L2.4 4.3a1 1 0 01-.2-1.4z" />
    </Svg>
  );
}

export default SvgComponent;
