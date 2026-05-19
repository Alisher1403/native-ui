import React from "react";
import { TextInput, ViewStyle } from "react-native";

export type TextAreaProps = {
  label?: string;
  placeholder?: string;
  value?: string;
  style?: ViewStyle;
  onChange?: React.Dispatch<React.SetStateAction<string>>;
  maxLength?: number;
  error?: string;
  required?: boolean;
};

export type TextAreaRef = TextInput;
