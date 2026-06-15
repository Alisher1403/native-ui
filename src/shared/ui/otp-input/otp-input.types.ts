import type { KeyboardTypeOptions, StyleProp, ViewStyle } from "react-native";

export type OtpInputProps = {
  value: string;
  length?: number;
  keyboardType?: KeyboardTypeOptions;
  disabled?: boolean;
  error?: string;
  autoFocus?: boolean;
  onChange?: (value: string) => void;
  onComplete?: (value: string) => void;
  style?: StyleProp<ViewStyle>;
};
