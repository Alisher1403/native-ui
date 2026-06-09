import { StyleSheet } from "react-native-unistyles";
import { IconProps } from "./icon.types";

export const styles = StyleSheet.create(theme => ({
  icon: (props: IconProps) => ({
    fontSize: props.size || 24,
    color: theme.colors[props.color || "main/label"],
  }),
}));
