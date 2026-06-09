import { mask, unMask } from "react-native-mask-text";
import { useMemo } from "react";
import { InputCardPanProps } from "./card-pan.types";

export function useModel(props: InputCardPanProps) {
  const { value, onChange } = props;

  const maskedValue = useMemo(() => {
    return mask(String(value ?? ""), "9999 9999 9999 9999");
  }, [value]);

  function onChangeText(text: string) {
    if (onChange) onChange(unMask(text));
  }

  return { maskedValue, onChangeText };
}
