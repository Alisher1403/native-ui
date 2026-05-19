import React from "react";
import { Text } from "react-native";
import { styles } from "./typography.style";
import { TypographyProps } from "./typography.types";
import { useUnistylesProps } from "../ui.utils/unistyles";

function Typography(props: TypographyProps) {
  const unistylesProps = useUnistylesProps(props);
  if (!props.children) return null;

  return (
    <Text
      style={[styles.text(unistylesProps), props.style]}
      adjustsFontSizeToFit={props.adjustsFontSizeToFit}
      numberOfLines={props.numberOfLines}
      ellipsizeMode={props.ellipsizeMode}
      onPress={props.onPress}
    >
      {props.children}
    </Text>
  );
}

export default React.memo(Typography);
