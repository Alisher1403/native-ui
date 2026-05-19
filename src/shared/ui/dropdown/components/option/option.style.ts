import { StyleSheet } from "react-native-unistyles";

export const styles = StyleSheet.create(theme => ({
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing.md,
    minHeight: theme.size(52),
    paddingVertical: theme.spacing.lg,
    paddingHorizontal: theme.spacing.lg,
    borderRadius: theme.radius.lg,
  },
  rowDisabled: {
    opacity: 0.45,
  },
  labelWrap: {
    flex: 1,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing.md,
  },
}));
