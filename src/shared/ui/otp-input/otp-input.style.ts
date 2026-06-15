import { StyleSheet } from "react-native-unistyles";

export const styles = StyleSheet.create(theme => ({
  boxRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: theme.size(8),
    variants: {
      disabled: {
        true: { opacity: 0.45 },
      },
    },
  },
  box: {
    alignItems: "center",
    backgroundColor: theme.colors["gray/100"],
    borderColor: theme.colors["gray/200"],
    borderRadius: theme.size(16),
    borderWidth: theme.size(1.5),
    justifyContent: "center",
    minHeight: theme.size(60),
    width: theme.size(48),
    variants: {
      error: {
        true: { borderColor: theme.colors["main/error"] },
      },
    },
  },
  activeBox: {
    variants: {
      isFocused: {
        true: { borderColor: theme.colors["gray/500"] },
      },
      error: {
        true: { borderColor: theme.colors["main/error"] },
      },
    },
  },
  digit: {
    color: theme.colors["main/label"],
    fontFamily: theme.fontFamily.Quicksand_600,
    fontSize: theme.size(24),
  },
  hiddenInput: {
    height: 1,
    opacity: 0,
    padding: 0,
    width: 1,
  },
  errorText: {
    color: theme.colors["main/error"],
    fontFamily: theme.fontFamily.Quicksand_500,
    fontSize: theme.size(14),
    marginTop: theme.size(8),
  },
}));
