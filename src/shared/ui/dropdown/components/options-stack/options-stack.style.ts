import { StyleSheet } from "react-native-unistyles";

export const styles = StyleSheet.create(theme => ({
  navigator: {
    minWidth: theme.size(180),
  },
  viewport: {
    overflow: "hidden",
  },
  panelsRow: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  panel: {
    width: "100%",
  },
}));
