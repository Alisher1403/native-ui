import { StyleProp, TextInput } from "react-native";
import { RefObject } from "react";
import { ViewStyle } from "react-native";

export type BaseInputProps = {
  value?: string;
  onChange?: (value: string) => void;
  label?: string;
  disabled?: boolean;
  error?: string;
  required?: boolean;
  placeholder?: string;
  style?: StyleProp<ViewStyle>;
  ref?: RefObject<TextInput>;
};
