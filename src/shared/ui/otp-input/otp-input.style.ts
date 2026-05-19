import { StyleSheet } from "react-native-unistyles";

export const styles = StyleSheet.create(theme => ({
  container: {
    gap: 12,
    justifyContent: "center",
    flexWrap: "wrap",
  },
  cell: {
    minWidth: theme.size(48),
    aspectRatio: 1,
    borderRadius: 16,
    backgroundColor: theme.colors["gray/100"],
    borderWidth: 1.5,
    borderColor: "transparent",
    variants: {
      error: {
        true: {
          borderColor: theme.colors["main/error"],
        },
      },
      disabled: {
        true: {
          opacity: 0.5,
        },
      },
    },
  },
  cellFocused: {
    borderColor: theme.colors["main/label-secondary"],
    variants: {
      error: {
        true: {
          borderColor: theme.colors["main/error"],
        },
      },
    },
  },
  cellFilled: {
    backgroundColor: theme.colors["gray/100"],
  },
  cellError: {
    borderColor: theme.colors["main/error"],
  },
  cellDisabled: {
    opacity: 0.5,
  },
  cellText: {
    fontSize: theme.size(20),
    fontFamily: theme.fontFamily.Inter_500,
    color: theme.colors["main/label"],
  },
}));
