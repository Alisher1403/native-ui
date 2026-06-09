import { StyleSheet } from "react-native-unistyles";
import type { TypographyProps, TypographyTypes, TypographyWeights } from "./typography.types";
import { getFontFamilyKey, getFontSize } from "./typography.config";

export const styles = StyleSheet.create(theme => ({
  text: (props: TypographyProps) => {
    const [name, weight] = props.name ? (props.name.split("/") as [TypographyTypes, TypographyWeights]) : [];
    const fontFamily = theme.fontFamily[getFontFamilyKey(props.font, weight)];

    return {
      color: theme.colors[props.color ?? "system/black"],
      marginTop: props.mt,
      marginBottom: props.mb,
      fontFamily,
      textAlign: props.align,
      flexShrink: props.flex ? 1 : undefined,
      flexBasis: props.flex ? "auto" : undefined,
      fontSize: getFontSize(name),
    };
  },
}));
