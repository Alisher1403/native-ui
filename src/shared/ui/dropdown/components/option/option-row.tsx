import { memo } from "react";
import { Pressable, View } from "react-native";
import { useUnistyles } from "react-native-unistyles";
import { Icon, Typography } from "../../../index";
import { styles } from "./option.style";
import type { DropdownOptionProps } from "./option.types";

function OptionRow({ icon, label, onPress, color = "main/label", disabled }: DropdownOptionProps) {
  const { theme } = useUnistyles();

  return (
    <Pressable
      onPress={onPress}
      disabled={!onPress || disabled}
      style={({ pressed }) => [
        styles.row,
        (disabled || !onPress) && styles.rowDisabled,
        pressed && { backgroundColor: theme.colors["gray/100"] },
      ]}
    >
      <View style={styles.labelWrap}>
        <View style={styles.content}>
          <Icon name={icon} size={20} color={color} />
          <Typography name="callout/regular" color={color}>
            {label}
          </Typography>
        </View>
      </View>
    </Pressable>
  );
}

export default memo(OptionRow);
