import { StyleSheet } from "react-native-unistyles";

export const styles = StyleSheet.create((theme, rt) => ({
  container: {
    padding: 12,
    paddingVertical: 8,
    paddingTop: 8 + rt.insets.top,
    paddingRight: 16,
  },
  leftContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  backButton: {
    padding: 8,
    borderRadius: 100,
  },
  backButtonUnderlay: {
    backgroundColor: theme.colors["gray/200"],
  },
}));
