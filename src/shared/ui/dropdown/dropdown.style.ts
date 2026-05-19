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
    borderRadius: theme.radius.xxl,
    overflow: "hidden",
  },
  root: {
    padding: theme.spacing.sm,
    backgroundColor: theme.colors["system/white"],
    borderRadius: theme.radius.xxl,
  },
}));
