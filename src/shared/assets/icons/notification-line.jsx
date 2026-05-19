import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill={props.color} {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 9a7 7 0 0114 0v3.764l1.822 3.644A1.099 1.099 0 0119.838 18h-3.964a4.002 4.002 0 01-7.748 0H4.162a1.1 1.1 0 01-.984-1.592L5 12.764V9zm5.268 9a2 2 0 003.464 0h-3.464zM12 4a5 5 0 00-5 5v3.764a2 2 0 01-.211.894L5.619 16h12.763l-1.17-2.342a2 2 0 01-.212-.894V9a5 5 0 00-5-5z"
      />
    </Svg>
  );
}

export default SvgComponent;
