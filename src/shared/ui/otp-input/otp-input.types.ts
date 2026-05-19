import { ViewStyle } from "react-native";

export type OtpInputProps = {
  value?: string;
  onFilled?(value: string): void;
  onChange?(value: string): void;
  numberOfDigits?: number;
  disabled?: boolean;
  error?: string;
  autoFocus?: boolean;
  secureTextEntry?: boolean;
  style?: ViewStyle;
};
