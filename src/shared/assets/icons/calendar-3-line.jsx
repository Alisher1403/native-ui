import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg viewBox="0 0 24 24" fill={props.color} xmlns="http://www.w3.org/2000/svg" {...props}>
      <Path d="M18 3a2 2 0 012 2v2h.191a1.5 1.5 0 011.342 2.17L20 12.237V19a2 2 0 01-2 2H6a2 2 0 01-2-2v-6.764L2.467 9.171A1.5 1.5 0 013.81 7H4V5a2 2 0 012-2h12zm1.382 6H4.618l1.276 2.553c.076.15.11.31.106.467V19h12v-6.98a1 1 0 01.106-.467L19.382 9zM14.5 11a2 2 0 011.995 1.85l.005.15v2a2 2 0 01-1.85 1.995L14.5 17h-1a2 2 0 01-1.995-1.85L11.5 15v-2a2 2 0 011.85-1.995L13.5 11h1zm-4.006.9l.006.116V16a1 1 0 01-1.993.117L8.5 16v-2.5a1 1 0 01-.548-1.836l.1-.058.986-.493c.601-.3 1.297.059 1.437.675l.019.112zM14.5 13h-1v2h1v-2zM18 5H6v2h12V5z" />
    </Svg>
  );
}

export default SvgComponent;
