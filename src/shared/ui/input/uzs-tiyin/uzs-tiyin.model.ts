import { mask, unMask } from "react-native-mask-text";
import { useMemo } from "react";
import { InputUzsTiyinProps } from "./uzs-tiyin.types";

const THOUSANDS_SEPARATOR = " ";

export function useModel(props: InputUzsTiyinProps) {
  const { value, onChange } = props;

  const maskedValue = useMemo(() => {
    const amount = Math.trunc(Number(value ?? 0) / 100);
    const digits = String(amount).replace(/\D/g, "");
    if (!digits || digits === "0") return "";

    return mask(digits, undefined, "currency", {
      prefix: "",
      groupSeparator: THOUSANDS_SEPARATOR,
    });
  }, [value]);

  function onChangeText(text: string) {
    if (onChange) onChange(Number(unMask(text)) * 100);
  }

  return { maskedValue, onChangeText };
}
