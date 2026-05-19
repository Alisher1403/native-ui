import { StyleSheet } from "react-native-unistyles";

export const styles = StyleSheet.create(theme => ({
  container: {
    flexDirection: "row",
    backgroundColor: theme.colors["gray/100"],
    borderRadius: theme.radius.xl,
    padding: theme.spacing.xs,
  },
  segment: {
    flex: 1,
    padding: theme.spacing.lg,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: theme.radius.xl - 2,
  },
  segmentActive: {
    backgroundColor: theme.colors["system/white"],
    boxShadow: theme.colors["main-card-shadow"],
  },
  segmentInactive: {},
}));
