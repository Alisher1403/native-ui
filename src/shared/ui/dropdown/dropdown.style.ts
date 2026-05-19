import { StyleSheet } from "react-native-unistyles";

export const styles = StyleSheet.create(theme => ({
  container: {
    position: "absolute",
    zIndex: 11,
    right: 0,
    top: "110%",
    transformOrigin: "right top",
    borderWidth: theme.size(1),
    borderColor: theme.colors["gray/200"],
    borderRadius: 20,
    overflow: "hidden",
  },
  root: {
    padding: 4,
    backgroundColor: theme.colors["system/white"],
    borderRadius: 20,
  },
}));
