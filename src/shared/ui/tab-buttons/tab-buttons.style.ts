import { StyleSheet } from "react-native-unistyles";

export const styles = StyleSheet.create(theme => ({
  optionsContainer: {
    flexDirection: "row",
    gap: 4,
    flex: 1,
  },
  option: {
    borderRadius: 9999,
    padding: 8,
    paddingHorizontal: 24,
    backgroundColor: theme.colors["gray/100"],
    flexGrow: 1,
    alignItems: "center",
  },
  optionActive: {
    backgroundColor: theme.colors["main/secondary"],
  },
}));
