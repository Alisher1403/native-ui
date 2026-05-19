import { StyleSheet } from "react-native-unistyles";
import { DivisionProps } from "./division.types";

export const styles = StyleSheet.create(theme => ({
  conainer: (props: DivisionProps) => ({
    margin: props.m,
    marginVertical: props.my,
    marginHorizontal: props.mx,
    marginTop: props.mt,
    marginBottom: props.mb,
    padding: props.p,
    paddingVertical: props.py,
    paddingHorizontal: props.px,
    paddingTop: props.pt,
    paddingBottom: props.pb,
    borderRadius: props.rounded,
    backgroundColor: props.bg && theme.alpha(props.bg, props.bgAlpha),
    flex: props.flex ? 1 : undefined,
    flexShrink: props.flexShrink ? 1 : undefined,
  }),
}));
