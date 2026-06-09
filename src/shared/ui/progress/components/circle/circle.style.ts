import { StyleSheet } from "react-native-unistyles";
import { ProgressCircleProps } from "./circle.types";

export const styles = StyleSheet.create(theme => ({
  container: (props: ProgressCircleProps) => ({
    width: theme.size(props.size || 0),
    height: theme.size(props.size || 0),
  }),
  track: (props: ProgressCircleProps) => ({
    borderWidth: theme.size(props.strokeWidth || 4),
    borderColor: theme.alpha(theme.colors[props.trackColor || "main/label"], 0.1),
  }),
  progress: (props: ProgressCircleProps) => ({
    color: theme.colors[props.progressColor || "main/label"],
  }),
}));
