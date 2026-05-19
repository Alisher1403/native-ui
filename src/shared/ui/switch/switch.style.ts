import { StyleSheet } from "react-native-unistyles";

export const SWITCH_WIDTH = 52;
export const SWITCH_HEIGHT = 32;
export const SWITCH_PADDING = 2;
export const SWITCH_THUMB_SIZE = 28;
export const SWITCH_TRANSLATE_X = SWITCH_WIDTH - SWITCH_THUMB_SIZE - SWITCH_PADDING * 2;

export const styles = StyleSheet.create(theme => ({
  container: {
    flexGrow: 1,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing.lg,
    justifyContent: "space-between",
  },
  label: {
    flexGrow: 1,
  },
  required: {
    color: theme.colors["main/error"],
  },
  switch: {
    width: theme.size(SWITCH_WIDTH),
    height: theme.size(SWITCH_HEIGHT),
    borderRadius: theme.radius.full,
    padding: theme.size(SWITCH_PADDING),
    justifyContent: "center",
  },
  thumb: {
    width: theme.size(SWITCH_THUMB_SIZE),
    height: theme.size(SWITCH_THUMB_SIZE),
    borderRadius: theme.radius.full,
    backgroundColor: theme.colors["system/white"],
    shadowColor: theme.colors["system/black"],
    shadowOpacity: 0.12,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
}));
