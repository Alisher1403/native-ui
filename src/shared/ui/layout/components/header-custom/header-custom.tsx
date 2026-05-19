import { Division } from "@src/shared/ui";
import { DivisionProps } from "@src/shared/ui/division/division.types";
import { StyleSheet } from "react-native-unistyles";

export type HeaderCustomProps = DivisionProps & {
  hasInsets?: boolean;
};

export function HeaderCustom(props: HeaderCustomProps) {
  styles.useVariants({
    hasInsets: props.hasInsets ?? true,
  });
  return <Division {...props} style={styles.container} />;
}

const styles = StyleSheet.create((theme, rt) => ({
  container: {
    variants: {
      hasInsets: {
        false: {
          paddingTop: 0,
        },
        true: {
          paddingTop: rt.insets.top,
        },
      },
    },
  },
}));
