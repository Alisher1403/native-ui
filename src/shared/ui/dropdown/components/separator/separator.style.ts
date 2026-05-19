import { StyleSheet } from "react-native-unistyles";

export const styles = StyleSheet.create(theme => ({
  separator: {
    height: theme.size(1),
    backgroundColor: theme.colors["gray/200"],
    marginHorizontal: theme.spacing.lg,
    marginVertical: theme.spacing.sm,
  },
}));
