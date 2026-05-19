import { StyleSheet } from "react-native-unistyles";

export const styles = StyleSheet.create((theme, rt) => ({
  container: {
    padding: theme.spacing.md,
    paddingVertical: theme.spacing.md,
    paddingTop: theme.spacing.md + rt.insets.top,
    paddingRight: theme.spacing.xl,
  },
  leftContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing.sm,
  },
  backButton: {
    padding: theme.spacing.md,
    borderRadius: 100,
  },
}));
