import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg viewBox="0 0 24 24" fill={props.color} xmlns="http://www.w3.org/2000/svg" {...props}>
      <Path d="M2.222 11.121a1 1 0 011.32-.083l.094.083 4.242 4.243a1 1 0 01-1.32 1.497l-.094-.083-4.242-4.242a1 1 0 010-1.415zm20.556-5.656a1 1 0 01.083 1.32l-.083.094-9.829 9.828a1.1 1.1 0 01-1.46.086l-.096-.085-4.171-4.172a1 1 0 011.32-1.498l.094.083 3.535 3.536 9.193-9.192a1 1 0 011.414 0zm-5 0a1 1 0 01.083 1.32l-.083.094-4.95 4.95a1 1 0 01-1.497-1.32l.083-.095 4.95-4.95a1 1 0 011.414.001z" />
    </Svg>
  );
}

export default SvgComponent;
