import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg viewBox="0 0 24 24" fill={props.color} xmlns="http://www.w3.org/2000/svg" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.896 3.03a2 2 0 012.701-.117l.127.117 4.243 4.243a2 2 0 01.117 2.7l-.117.128-10.314 10.314a2 2 0 01-1.238.578L9.239 21H4.006a1.01 1.01 0 01-1.004-.9l-.006-.11v-5.233a2 2 0 01.467-1.284l.12-.13L13.896 3.03zM12.17 7.584l-7.174 7.174V19H9.24l7.174-7.174-4.243-4.243-.001.001zm3.14-3.14L13.584 6.17l4.243 4.243 1.726-1.726-4.243-4.243z"
      />
    </Svg>
  );
}

export default SvgComponent;
