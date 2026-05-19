import { StyleSheet } from "react-native-unistyles";

export const styles = StyleSheet.create(theme => ({
  background: {
    borderRadius: 32,
    overflow: "hidden",
    backgroundColor: theme.colors["system/white"],
  },
  header: {
    padding: theme.spacing.sm,
    paddingTop: theme.spacing.sm,
    paddingHorizontal: theme.spacing.md,
  },
  handle: {
    height: 3,
    width: "30%",
    backgroundColor: theme.colors["gray/500"],
    borderRadius: 10,
  },
  handleWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: theme.spacing.lg,
  },
}));
