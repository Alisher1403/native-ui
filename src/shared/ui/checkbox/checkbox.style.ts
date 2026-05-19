import { useMemo } from "react";
import { StyleSheet } from "react-native-unistyles";
import type { CheckboxProps } from "./checkbox.types";

export const styles = StyleSheet.create(theme => ({
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  box: {
    width: theme.size(22),
    height: theme.size(22),
    borderWidth: theme.size(2),
    borderColor: theme.colors["gray/500"],
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  boxChecked: {
    backgroundColor: theme.colors["main/label"],
    borderColor: theme.colors["main/label"],
  },
  boxDisabled: {
    opacity: 0.5,
  },
}));

export function useCheckboxStyles(props: CheckboxProps) {
  return useMemo(
    () => ({
      row: [styles.row, props.disabled && styles.boxDisabled],
      box: [styles.box, props.value && styles.boxChecked],
    }),
    [props.value, props.disabled]
  );
}
