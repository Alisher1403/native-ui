import { useMemo } from "react";
import { InputCardExpiryProps } from "./card-expiry.types";

export function useModel(props: InputCardExpiryProps) {
  const { value, onChange } = props;

  const maskedValue = useMemo(() => {
    const digits = String(value ?? "").replace(/\D/g, "").slice(0, 4);
    if (digits.length <= 2) return digits;

    const month = digits.slice(0, 2);
    const year = digits.slice(2);
    return year ? `${month}/${year}` : `${month}/`;
  }, [value]);

  function onChangeText(text: string) {
    if (onChange) onChange(text.replace(/\D/g, "").slice(0, 4));
  }

  return { maskedValue, onChangeText };
}
