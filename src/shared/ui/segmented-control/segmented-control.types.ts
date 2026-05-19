import { StyleProp, ViewStyle } from "react-native";

export type SegmentedControlOption = {
  value: any;
  label: string;
};

export type SegmentedControlProps = {
  options: SegmentedControlOption[];
  value: SegmentedControlOption["value"];
  onChange: (value: SegmentedControlOption["value"]) => void;
  style?: StyleProp<ViewStyle>;
};
