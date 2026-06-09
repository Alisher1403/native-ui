import { mask, unMask } from "react-native-mask-text";
import { InputPhoneProps } from "./phone.types";
import { useCallback, useMemo } from "react";
import { INPUT_PREFIX } from "../input.enums";

export function useModel(props: InputPhoneProps) {
  const { value, onChange } = props;

  const maskedValue = useMemo(() => {
    return mask(String(value).replace("+998", ""), "(99) 999-99-99");
  }, [value]);

  function onChangeText(text: string) {
    const unmasked = INPUT_PREFIX.PHONE + unMask(text);
    if (onChange) onChange(unmasked);
  }

  return { maskedValue, onChangeText };
}
