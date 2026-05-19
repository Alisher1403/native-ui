import { StyleSheet } from "react-native-unistyles";
import { LayoutContentProps } from "./content.types";

export const styles = StyleSheet.create(theme => ({
  content: (props: LayoutContentProps) => ({
    backgroundColor: theme.colors[props.bg || "system/page"],
    flex: 1,
    paddingVertical: !props.scrollEnabled ? props.py : undefined,
    paddingHorizontal: !props.scrollEnabled ? props.px : undefined,
  }),
  contentContainer: (props: LayoutContentProps) => ({
    flexGrow: 1,
    paddingVertical: props.py,
    paddingHorizontal: props.px,
  }),
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
}));
