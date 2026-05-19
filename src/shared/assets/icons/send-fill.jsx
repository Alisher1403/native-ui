import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg viewBox="0 0 24 24" fill={props.color} xmlns="http://www.w3.org/2000/svg" {...props}>
      <Path d="M20.235 5.686c.432-1.195-.726-2.353-1.921-1.92L3.709 9.048c-1.199.434-1.344 2.07-.241 2.709l4.662 2.699 4.163-4.163a1 1 0 011.414 1.414L9.544 15.87l2.7 4.662c.638 1.103 2.274.957 2.708-.241l5.283-14.605z" />
    </Svg>
  );
}

export default SvgComponent;
