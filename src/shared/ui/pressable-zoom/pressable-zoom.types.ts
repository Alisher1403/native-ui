import type { ReactNode } from "react";
import type { PressableProps, StyleProp, ViewStyle } from "react-native";

export type PressableZoomProps = Omit<
  PressableProps,
  "onPress" | "onLongPress" | "onPressIn" | "onPressOut" | "style" | "children"
> & {
  onPress?: PressableProps["onPress"];
  onLongPress?: PressableProps["onLongPress"];
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
  scale?: number;
  duration?: number;
};
