import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import { UIIconsType } from "../ui.config";

export type ButtonType = "default" | "primary" | "danger" | "warning";

export type ButtonSize = "small" | "medium" | "large";

export type ButtonProps = {
  onPress?(): void;
  children?: React.ReactNode;
  icon?: UIIconsType;
  type?: ButtonType;
  disabled?: boolean;
  loading?: boolean;
  style?: StyleProp<ViewStyle>;
  size?: ButtonSize;
  containerStyle?: ViewStyle;
  fullWidth?: boolean;
};
