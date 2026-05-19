import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg viewBox="0 0 24 24" fill={props.color} xmlns="http://www.w3.org/2000/svg" {...props}>
      <Path d="M14.28 2a2 2 0 011.897 1.368L16.72 5H20a1 1 0 110 2l-.003.071-.867 12.143A3 3 0 0116.138 22H7.862a3 3 0 01-2.992-2.786L4.003 7.07 4 7a1 1 0 010-2h3.28l.543-1.632A2 2 0 019.721 2h4.559zm3.717 5H6.003l.862 12.071a1 1 0 00.997.929h8.276a1 1 0 00.997-.929L17.997 7zM10 10a1 1 0 01.993.883L11 11v5a1 1 0 01-1.993.117L9 16v-5a1 1 0 011-1zm4 0a1 1 0 011 1v5a1 1 0 01-2 0v-5a1 1 0 011-1zm.28-6H9.72l-.333 1h5.226l-.333-1z" />
    </Svg>
  );
}

export default SvgComponent;
