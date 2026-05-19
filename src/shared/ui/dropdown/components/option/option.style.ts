import { StyleSheet } from "react-native-unistyles";

export const styles = StyleSheet.create(theme => ({
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    minHeight: theme.size(52),
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  rowDisabled: {
    opacity: 0.45,
  },
  labelWrap: {
    flex: 1,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
}));
