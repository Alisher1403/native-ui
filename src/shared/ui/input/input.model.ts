import { InputProps } from "./input.types";
import { InputMaskConfig } from "./input.config";
import { useEffect } from "react";

export default function useModel({ type = "default", onChange, ...props }: InputProps) {
  const currentConfig = InputMaskConfig[type];
  const maskedValue = currentConfig.mask(props.value);

  function handleNextInput() {
    if (
      (props.nextInput && currentConfig.maxLength && maskedValue.length >= currentConfig.maxLength) ||
      (props.maxLength && maskedValue.length >= props.maxLength)
    ) {
      props.nextInput?.current?.focus();
    }
  }

  useEffect(() => {
    if (props.nextInput) handleNextInput();
  }, [maskedValue]);

  function onChangeText(input: string) {
    const unmasked = currentConfig.unMask ? currentConfig.unMask(input) : input;
    if (onChange) onChange(unmasked);
  }

  return { maskedValue, onChangeText, currentConfig };
}
