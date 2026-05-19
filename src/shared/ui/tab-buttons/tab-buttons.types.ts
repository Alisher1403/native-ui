import { StyleProp, ViewStyle } from "react-native";
import { DivisionProps } from "../division/division.types";

export type TabButtonsProps = DivisionProps & {
  options: { label: string; value: any }[];
  value: any;
  onChange: (value: string) => void;
  style?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
};
