import type { ReactNode } from "react";
import type { StyleProp, ViewProps, ViewStyle } from "react-native";
import type { SharedValue } from "react-native-reanimated";
import type { DropdownOptionProps, DropdownOptionsOption } from "./components/option/option.types";

export type DropdownOptionsSeparator = { separator: true };

export type DropdownOptionsEntry = DropdownOptionsSeparator | DropdownOptionsOption;

export type DropdownShiftEvent = {
  height: number;
  phase: "enter" | "height";
};

export type DropdownProps = {
  children?: ReactNode;
  onLayout?: ViewProps["onLayout"];
  shiftValue?: SharedValue<number>;
  style?: StyleProp<ViewStyle>;
};

export type DropdownSeparatorProps = {
  style?: StyleProp<ViewStyle>;
};

export type { DropdownOptionProps, DropdownOptionsOption };
