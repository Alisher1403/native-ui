import React from "react";
import { View } from "react-native";
import { DivisionProps } from "./division.types";
import { styles } from "./division.style";
import { useUnistylesProps } from "../ui.utils/unistyles";

function Division(props: DivisionProps) {
  const unistylesProps = useUnistylesProps(props);

  if (props.hidden) return null;

  return <View style={styles.conainer(unistylesProps)} {...props} children={props.children} />;
}

export default React.memo(Division);
