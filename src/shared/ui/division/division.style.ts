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
    backgroundColor: theme.alpha(props.bg ? theme.colors[props.bg] : props.backgroundColor, props.bgAlpha),
    flex: props.flex ? 1 : undefined,
    flexShrink: props.flexShrink ? 1 : undefined,
    height: props.height && theme.size(props.height),
    width: props.width && theme.size(props.width),
  }),
}));
