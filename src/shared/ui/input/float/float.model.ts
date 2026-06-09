import { useEffect, useRef, useState } from "react";
import { InputFloatProps, InputFloatValue } from "./float.types";

const DECIMAL_SEPARATOR = ",";
const THOUSANDS_SEPARATOR = " ";

export function useModel(props: InputFloatProps) {
  const { value, onChange } = props;
  const lastEmittedValue = useRef<InputFloatValue | undefined>(value);

  const [maskedValue, setMaskedValue] = useState(() => formatFloatValue(value));

  useEffect(() => {
    if (value !== lastEmittedValue.current) {
      setMaskedValue(formatFloatValue(value));
      lastEmittedValue.current = value;
    }
  }, [value]);

  function onChangeText(text: string) {
    if (!onChange) return;

    const normalized = normalizeFloatValue(text);
    const nextValue = getNumberValue(normalized);

    setMaskedValue(formatFloatValue(normalized));
    lastEmittedValue.current = nextValue;
    onChange(nextValue);
  }

  return { maskedValue, onChangeText };
}

function formatFloatValue(value?: InputFloatValue) {
  const normalized = normalizeFloatValue(value);
  if (!normalized || normalized === "0") return "";

  const [integerPart = "", decimalPart] = normalized.split(DECIMAL_SEPARATOR);
  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, THOUSANDS_SEPARATOR);

  if (decimalPart === undefined) return formattedInteger;
  return `${formattedInteger}${DECIMAL_SEPARATOR}${decimalPart}`;
}

function getNumberValue(normalized: string) {
  if (!normalized) return 0;
  return Number(normalized.replace(DECIMAL_SEPARATOR, "."));
}

function normalizeFloatValue(value?: InputFloatValue) {
  const raw = String(value ?? "");
  if (!raw) return "";

  let hasDecimalSeparator = false;
  let normalized = "";

  for (const char of raw) {
    if (char >= "0" && char <= "9") {
      normalized += char;
      continue;
    }

    if ((char === DECIMAL_SEPARATOR || char === ".") && !hasDecimalSeparator) {
      normalized += DECIMAL_SEPARATOR;
      hasDecimalSeparator = true;
    }
  }

  if (!normalized) return "";
  if (normalized.startsWith(DECIMAL_SEPARATOR)) normalized = `0${normalized}`;

  const [integerPart = "", decimalPart] = normalized.split(DECIMAL_SEPARATOR);
  const sanitizedInteger = integerPart.replace(/^0+(?=\d)/, "") || "0";

  if (decimalPart === undefined) return sanitizedInteger;
  return `${sanitizedInteger}${DECIMAL_SEPARATOR}${decimalPart}`;
}
