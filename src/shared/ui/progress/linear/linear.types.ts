import { UIColorsType } from "@src/shared/ui/ui.config";
import { ViewStyle } from "react-native";
import { SharedValue } from "react-native-reanimated";

export type ProgressLinearProps = {
  max: number;
  value: SharedValue<number>;
  size?: "small" | "medium" | "large";
  progressColor?: UIColorsType;
  style?: ViewStyle;
};
