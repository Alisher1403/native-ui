import { mask, unMask } from "react-native-mask-text";
import { useMemo } from "react";
import { InputNumberProps } from "./number.types";

const THOUSANDS_SEPARATOR = " ";

export function useModel(props: InputNumberProps) {
  const { value, onChange } = props;

  const maskedValue = useMemo(() => {
    const digits = String(value ?? "").replace(/\D/g, "");
    if (!digits) return "";

    const formatted = mask(digits, undefined, "currency", {
      prefix: "",
      groupSeparator: THOUSANDS_SEPARATOR,
    });

    return formatted === "0" ? "" : formatted;
  }, [value]);

  function onChangeText(text: string) {
    if (onChange) onChange(Number(unMask(text)));
  }

  return { maskedValue, onChangeText };
}
