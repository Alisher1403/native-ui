import { StyleSheet } from "react-native-unistyles";

export const styles = StyleSheet.create(theme => ({
  background: {
    borderRadius: 32,
    overflow: "hidden",
    backgroundColor: theme.colors["system/white"],
  },
  header: {
    padding: 4,
    paddingTop: 4,
    paddingHorizontal: 8,
  },
  handle: {
    height: 3,
    width: "30%",
    backgroundColor: theme.colors["gray/500"],
    borderRadius: 10,
  },
  handleWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
}));
