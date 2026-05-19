import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import type { UISpacingType } from "../ui.config";

export type CheckboxProps = {
  value: boolean;
  onValueChange: (value: boolean) => void;
  disabled?: boolean;
  /** Label or custom content to the right of the box. Rendered as Typography when string. */
  label?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  /** Gap between box and label (default: sm) */
  gap?: UISpacingType;
};
