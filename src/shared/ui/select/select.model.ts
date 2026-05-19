import { SelectProps } from "./select.types";
import { useEffect, useMemo, useRef } from "react";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export function useModel(props: SelectProps) {
  const { options, onChange, onClear: onClearProp, onNullish, value } = props;
  const insets = useSafeAreaInsets();
  const sheetRef = useRef<BottomSheetModal>(null);
  const optionsMap = useMemo(() => {
    if (!options?.length) return new Map();
    return new Map(options.map(x => [x.value, x]));
  }, [options]);

  function handleOpenSheet() {
    sheetRef.current?.present();
  }

  function handleDismissSheet() {
    sheetRef.current?.dismiss();
  }

  function onSelect(selectedValue: SelectProps["value"]) {
    if (onChange && selectedValue !== value) onChange(selectedValue);
    handleDismissSheet();
  }

  function onClear() {
    if (onChange) onChange(Object.hasOwn(props, "nullValue") ? props.nullValue : 0);
    if (onClearProp) onClearProp();
    handleDismissSheet();
  }

  useEffect(() => {
    if (!value && onNullish) onNullish();
  }, [value]);

  return { onSelect, optionsMap, sheetRef, insets, onClear, handleOpenSheet, handleDismissSheet };
}
