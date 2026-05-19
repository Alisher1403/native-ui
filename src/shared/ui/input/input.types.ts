import { KeyboardType, TextInput, TextInputProps } from "react-native";
import { RefObject } from "react";
import { ViewStyle } from "react-native";

export type InputValueType = string | number | undefined | null;
export type InputType =
  | "default"
  | "phone"
  | "number"
  | "float"
  | "uzs-tiyin"
  | "card-pan"
  | "year"
  | "card-expiry"
  | "passport-number"
  | "passport-series";

export type InputProps = TextInputProps & {
  ref?: RefObject<TextInput>;
  label?: string;
  suffix?: string;
  name?: string;
  type?: InputType;
  containerStyle?: ViewStyle;
  onChange?(value: any): void;
  disabled?: boolean;
  value?: InputValueType;
  error?: string;
  required?: boolean;
  nextInput?: RefObject<TextInput>;
};

export type InputConfig = Record<
  NonNullable<InputProps["type"]>,
  {
    prefixText?: string;
    keyboardType: KeyboardType;
    maxLength?: number;
    unMask?(text: string): InputValueType;
    mask(text?: string): string;
    placeholder?: string;
  }
>;
