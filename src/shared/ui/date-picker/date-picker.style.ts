import { StyleSheet } from "react-native-unistyles";

export const styles = StyleSheet.create(theme => ({
  header: {
    padding: theme.spacing.md,
    paddingHorizontal: theme.spacing.lg,
    borderRadius: theme.radius.xl,
    backgroundColor: theme.colors["gray/100"],
    borderWidth: 1,
    borderColor: theme.colors.transparent,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: theme.spacing.sm + 4,
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
  headerText: {
    color: theme.colors["main/label"],
    fontSize: 15,
    fontWeight: "500",
  },
  placeholder: {
    color: theme.colors["main/label-secondary"],
  },
  clearButton: {
    padding: theme.spacing.xs,
    variants: {
      disabled: {
        true: {
          opacity: 0.5,
        },
      },
    },
  },
}));
