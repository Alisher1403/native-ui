import React from "react";
import { Pressable, View } from "react-native";
import { Typography, Icon } from "../index";
import { useCheckboxStyles } from "./checkbox.style";
import type { CheckboxProps } from "./checkbox.types";

function Checkbox(props: CheckboxProps) {
  const { value, onValueChange, disabled, label, style } = props;
  const themed = useCheckboxStyles(props);

  const handlePress = () => {
    if (!disabled) onValueChange(!value);
  };

  return (
    <Pressable style={[themed.row, style]} onPress={handlePress} disabled={disabled}>
      <View style={themed.box}>{value && <Icon name="check-line" size="sm" color="system/white" />}</View>
      <Typography name="callout/regular" color="main/label" flex>
        {label}
      </Typography>
    </Pressable>
  );
}

export default React.memo(Checkbox);
