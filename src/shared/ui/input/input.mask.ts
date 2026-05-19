import { mask, unMask } from "react-native-mask-text";
import { InputValueType } from "./input.types";

const DECIMAL_SEPARATOR = ",";
const THOUSANDS_SEPARATOR = " ";
const PHONE_PREFIX = "+998";

// ? ============== Default ==============
export function MaskDefaultValue(text?: InputValueType) {
  return text ? String(text) : "";
}

export function UnMaskDefaultValue(text: string) {
  return text;
}

// ? ============== Phone ==============
export function MaskPhoneValue(text?: InputValueType) {
  return mask(String(text).replace(PHONE_PREFIX, ""), "(99) 999-99-99");
}

export function UnMaskPhoneValue(text: string) {
  return PHONE_PREFIX + unMask(text);
}

// ? ============== Integer number ==============
export function MaskNumberValue(text?: InputValueType) {
  const digits = String(text).replace(/\D/g, "");
  if (!digits) return "";

  const formatted = mask(digits, undefined, "currency", {
    prefix: "",
    groupSeparator: THOUSANDS_SEPARATOR,
  });
  if (formatted === "0") return "";
  return formatted;
}

export function UnMaskNumberValue(text: string) {
  return Number(unMask(text));
}

// ? ============== Float number ==============
export function MaskFloatValue(text?: InputValueType) {
  const normalized = normalizeFloatValue(text);
  if (!normalized || normalized === "0") return "";

  const [integerPart = "", decimalPart] = normalized.split(DECIMAL_SEPARATOR);
  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, THOUSANDS_SEPARATOR);

  if (decimalPart === undefined) return formattedInteger;
  return `${formattedInteger}${DECIMAL_SEPARATOR}${decimalPart}`;
}

export function UnMaskFloatValue(text: string) {
  const normalized = normalizeFloatValue(text);
  if (!normalized) return 0;
  if (normalized.endsWith(DECIMAL_SEPARATOR)) return normalized;
  return Number(normalized.replace(DECIMAL_SEPARATOR, "."));
}

// ? ============== UZS to tiyin ==============
export function MaskUzsTiyinValue(text?: InputValueType) {
  return MaskNumberValue(Number(text) / 100);
}

export function UnMaskUzsTiyinValue(text: string) {
  return UnMaskNumberValue(text) * 100;
}

// ? ============== Card PAN ==============
export function MaskCardPanValue(text?: InputValueType) {
  return mask(String(text), "9999 9999 9999 9999");
}

export function UnMaskCardPanValue(text: string) {
  return unMask(text);
}

// ? ============== Card expiry ==============
export function MaskCardExpiryValue(text: string) {
  const digits = text.replace(/\D/g, "").slice(0, 4);
  if (digits.length <= 2) return digits;

  const mm = digits.slice(0, 2);
  const yy = digits.slice(2);
  return yy ? `${mm}/${yy}` : `${mm}/`;
}

export function UnMaskCardExpiryValue(text: string) {
  return text.replace(/\D/g, "").slice(0, 4);
}

// ? ============== Year ==============
export function MaskYearValue(text?: InputValueType) {
  const formatted = mask(String(text), "9999");
  if (formatted === "0") return "";
  return formatted;
}

export function UnMaskYearValue(text: string) {
  return Number(unMask(text));
}

// ? ============== Passport number ==============
export function MaskPassportNumberValue(text?: InputValueType) {
  return mask(String(text), "9999999");
}

export function UnMaskPassportNumberValue(text: string) {
  return unMask(text);
}

// ? ============== Passport series ==============
export function MaskPassportSeriesValue(text?: InputValueType) {
  return mask(String(text).toUpperCase(), "AA");
}

export function UnMaskPassportSeriesValue(text: string) {
  return unMask(text).toUpperCase();
}

// ? ============== Normalize float value ==============
function normalizeFloatValue(value?: InputValueType) {
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
