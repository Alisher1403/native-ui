import React from "react";
import { View } from "react-native";
import { FlexProps } from "./flex.types";
import { styles } from "./flex.style";
import { useUnistylesProps } from "../ui.utils/unistyles";

function Flex(props: FlexProps) {
  const unistylesProps = useUnistylesProps(props);

  return <View style={[styles.container(unistylesProps), props.style]}>{props.children}</View>;
}

export default React.memo(Flex);
