import { StyleSheet } from "react-native-unistyles";

export const styles = StyleSheet.create(theme => ({
  header: {
    padding: 8,
    paddingHorizontal: 12,
    borderRadius: 16,
    backgroundColor: theme.colors["gray/100"],
    borderWidth: 1,
    borderColor: theme.colors.transparent,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
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
    padding: 2,
    variants: {
      disabled: {
        true: {
          opacity: 0.5,
        },
      },
    },
  },
}));
