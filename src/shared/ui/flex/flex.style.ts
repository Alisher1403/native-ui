import { StyleSheet } from "react-native-unistyles";
import { FlexProps } from "./flex.types";

export const styles = StyleSheet.create(theme => ({
  container: (props: FlexProps) => ({
    gap: props.gap,
    rowGap: props.gapY,
    columnGap: props.gapX,
    flexDirection: props.column ? "column" : "row",
    alignItems: props.align,
    justifyContent: props.justify,
    marginTop: props.mt,
    flexWrap: props.wrap ? "wrap" : "nowrap",
    flex: props.fullWidth ? 1 : undefined,
    flexShrink: props.flexShrink ? 1 : undefined,
  }),
}));
