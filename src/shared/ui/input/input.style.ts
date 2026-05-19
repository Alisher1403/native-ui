import { StyleSheet } from "react-native-unistyles";

export const styles = StyleSheet.create(theme => ({
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.colors["gray/100"],
    borderRadius: theme.radius.xl,
    borderWidth: theme.size(1),
    borderColor: "transparent",
    height: theme.size(48),
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
  prefixText: {
    paddingLeft: theme.spacing.lg,
    variants: {
      prefixText: {
        true: {
          paddingRight: theme.spacing.sm,
        },
      },
    },
  },
  suffixText: {
    paddingRight: theme.spacing.lg,
    paddingLeft: theme.spacing.sm,
  },
  input: {
    flex: 1,
    paddingHorizontal: theme.spacing.lg,
    color: theme.colors["main/label"],
    fontFamily: theme.fontFamily.Inter_500,
    fontSize: theme.size(15),
    height: "100%",
    variants: {
      prefixText: {
        true: {
          paddingLeft: 0,
        },
      },
      suffixText: {
        true: {
          paddingRight: 0,
        },
      },
    },
  },
}));
