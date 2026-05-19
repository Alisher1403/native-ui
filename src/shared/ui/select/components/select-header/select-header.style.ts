import { StyleSheet } from "react-native-unistyles";

export const styles = StyleSheet.create(theme => ({
  header: {
    borderRadius: 16,
    backgroundColor: theme.colors["gray/100"],
    borderWidth: theme.size(1),
    borderColor: "transparent",
    padding: 12,
    variants: {
      error: {
        true: { borderColor: theme.colors["main/error"] },
      },
      disabled: {
        true: { opacity: 0.5, pointerEvents: "none" },
      },
    },
  },
}));
