import { StyleSheet } from "react-native-unistyles";

export const styles = StyleSheet.create(theme => ({
  container: {
    flexDirection: "row",
    backgroundColor: theme.colors["gray/100"],
    borderRadius: 16,
    padding: 2,
  },
  segment: {
    flex: 1,
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 14,
  },
  segmentActive: {
    backgroundColor: theme.colors["system/white"],
    boxShadow: theme.colors["main-card-shadow"],
  },
  segmentInactive: {},
}));
