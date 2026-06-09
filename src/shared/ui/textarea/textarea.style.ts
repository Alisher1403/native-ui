import { StyleSheet } from "react-native-unistyles";

export const styles = StyleSheet.create(theme => ({
  container: {},
  input: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    color: theme.colors["main/label"],
    backgroundColor: theme.colors["gray/100"],
    borderRadius: 16,
    minHeight: theme.size(120),
    borderWidth: 1,
    borderColor: "transparent",
    fontFamily: theme.fontFamily.Inter_500,
    fontSize: theme.size(15),
    variants: {
      error: {
        true: {
          borderColor: theme.colors["main/error"],
        },
      },
    },
  },
  placeholder: {
    color: theme.colors["main/label-secondary"],
  },
}));
