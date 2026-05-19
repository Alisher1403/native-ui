import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg viewBox="0 0 24 24" fill={props.color} xmlns="http://www.w3.org/2000/svg" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 2a1 1 0 01.946.677l.13.378a3 3 0 001.869 1.87l.378.129a1 1 0 010 1.892l-.378.13a3 3 0 00-1.87 1.869l-.129.378a1 1 0 01-1.892 0l-.13-.378a3 3 0 00-1.869-1.87l-.378-.129a1 1 0 010-1.892l.378-.13a3 3 0 001.87-1.869l.129-.378A1 1 0 0120 2zm0 3.196a5.002 5.002 0 01-.804.804c.299.237.567.505.804.804.237-.299.505-.567.804-.804A5.002 5.002 0 0120 5.196zM8 3.586A2 2 0 019.414 3H14a1 1 0 110 2H9.414L8 6.414A2 2 0 016.586 7H4v12h16v-6a1 1 0 012 0v6a2 2 0 01-2 2H4a2 2 0 01-2-2V7a2 2 0 012-2h2.586L8 3.586zM9 12.5a3 3 0 116 0 3 3 0 01-6 0zm3-5a5 5 0 100 10 5 5 0 000-10z"
      />
    </Svg>
  );
}

export default SvgComponent;
