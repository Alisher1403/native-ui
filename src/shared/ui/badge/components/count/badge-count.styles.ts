import { StyleSheet } from "react-native-unistyles";

export const styles = StyleSheet.create(theme => ({
  badgeContainer: {
    position: "relative",
  },
  badge: {
    position: "absolute",
    top: theme.size(-8),
    right: theme.size(-8),
    borderRadius: 9999,
    paddingHorizontal: theme.size(3),
    paddingVertical: theme.size(2),
    zIndex: 10,
    borderWidth: theme.size(2),
    borderColor: theme.colors["system/white"],
    minWidth: theme.size(17),
    alignItems: "center",
  },
  badgeText: {
    color: theme.colors["system/white"],
    fontSize: theme.size(8),
    fontWeight: "bold",
  },
}));
