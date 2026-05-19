import { StyleSheet } from "react-native-unistyles";

export const styles = StyleSheet.create(theme => ({
  container: {
    gap: theme.spacing.lg,
    justifyContent: "center",
    flexWrap: "wrap",
  },
  cell: {
    minWidth: theme.size(48),
    aspectRatio: 1,
    borderRadius: theme.radius.xl,
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
    fontSize: theme.fontSize.lg,
    fontFamily: theme.fontFamily.Inter_500,
    color: theme.colors["main/label"],
  },
}));
