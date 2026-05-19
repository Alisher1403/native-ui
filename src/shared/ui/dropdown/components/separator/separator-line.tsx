import { memo } from "react";
import { View } from "react-native";
import { styles } from "./separator.style";
import type { DropdownSeparatorProps } from "../../dropdown.types";

function SeparatorLine({ style }: DropdownSeparatorProps) {
  return <View style={[styles.separator, style]} />;
}

export default memo(SeparatorLine);
