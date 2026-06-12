import { ViewStyle } from "react-native";
import { UIColorsType } from "../../ui.config";
import { SharedValue } from "react-native-reanimated";

export type ProgressCircleProps = {
  max: number;
  value: SharedValue<number>;
  size?: number;
  strokeWidth?: number;
  trackColor?: UIColorsType;
  progressColor?: UIColorsType;
  style?: ViewStyle;
};
