import { StyleSheet } from "react-native-unistyles";

export const styles = StyleSheet.create(theme => ({
  container: {
    width: "100%",
    backgroundColor: theme.colors["gray/100"],
    borderRadius: theme.radius.md,
    overflow: "hidden",
    variants: {
      size: {
        small: {
          height: 4,
        },
        medium: {
          height: 8,
        },
        large: {
          height: 12,
        },
      },
    },
  },
  progress: {
    height: "100%",
    backgroundColor: "red",
    borderRadius: theme.radius.md,
  },
}));
