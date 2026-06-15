import { useRef, useState } from "react";
import { TextInput } from "react-native";
import type { OtpInputProps } from "./otp-input.types";

export function useModel(props: OtpInputProps) {
  const length = Math.max(1, Math.floor(props.length ?? 6));
  const inputRef = useRef<TextInput>(null);
  const [isFocused, setIsFocused] = useState(false);
  const activeIndex = Math.min(props.value.length, length - 1);

  function focusInput() {
    if (!props.disabled) inputRef.current?.focus();
  }

  function handleChange(nextValue: string) {
    if (nextValue === props.value) return;
    props.onChange?.(nextValue);
    if (nextValue.length === length) props.onComplete?.(nextValue);
  }

  function handleBlur() {
    setIsFocused(false);
  }

  function handleFocus() {
    setIsFocused(true);
  }

  return {
    activeIndex,
    focusInput,
    handleBlur,
    handleChange,
    handleFocus,
    inputRef,
    isFocused,
    length,
  };
}
