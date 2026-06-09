import { StyleSheet } from "react-native-unistyles";

export const styles = StyleSheet.create(theme => ({
  prefix: {
    paddingLeft: theme.size(12),
    paddingRight: theme.size(8),
    borderRightWidth: theme.size(1),
    borderRightColor: theme.colors["gray/400"],
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.colors["gray/50"],
    borderRadius: 16,
    borderWidth: theme.size(1),
    borderColor: theme.colors["main/label"],
    variants: {
      disabled: {
        true: {
          opacity: 0.5,
        },
      },
    },
  },
  input: {
    paddingLeft: theme.size(8),
    paddingRight: theme.size(12),
    paddingVertical: theme.size(12),
    flex: 1,
    fontSize: theme.size(16),
    color: theme.colors["main/label"],
    fontFamily: theme.fontFamily.Quicksand_500,
  },
  placeholder: {
    color: theme.colors["main/label-secondary"],
  },
}));
