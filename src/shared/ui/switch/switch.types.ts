import React from "react";
import { StyleProp, ViewStyle } from "react-native";

export type SwitchProps = {
  value: boolean;
  onChange: (value: boolean) => void;
  error?: string;
  label?: React.ReactNode;
  required?: boolean;
  style?: StyleProp<ViewStyle>;
};
