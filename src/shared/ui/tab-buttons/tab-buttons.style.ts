import { StyleSheet } from "react-native-unistyles";

export const styles = StyleSheet.create(theme => ({
  optionsContainer: {
    flexDirection: "row",
    gap: theme.spacing.sm,
    flex: 1,
  },
  option: {
    borderRadius: theme.radius.full,
    padding: theme.spacing.md,
    paddingHorizontal: theme.spacing.xxxl,
    backgroundColor: theme.colors["gray/100"],
    flexGrow: 1,
    alignItems: "center",
  },
  optionActive: {
    backgroundColor: theme.colors["main/secondary"],
  },
}));
