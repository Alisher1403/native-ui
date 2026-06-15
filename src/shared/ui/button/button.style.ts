import { StyleSheet } from "react-native-unistyles";

export const styles = StyleSheet.create(theme => ({
  container: {
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: theme.colors["gray/100"],
    minHeight: 48,
    variants: {
      type: {
        primary: { backgroundColor: theme.colors["main/primary"] },
        danger: { backgroundColor: theme.colors["main/error"] },
        warning: { backgroundColor: theme.colors["main/warning"] },
      },
      size: {
        small: { minHeight: 40 },
        medium: { minHeight: 48 },
        large: { minHeight: 56 },
      },
      fullWidth: {
        true: { flex: 1 },
      },
      disabled: { true: { backgroundColor: theme.colors["gray/100"] } },
    },
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 1,
    flexGrow: 1,
    padding: 10,
    paddingHorizontal: 12,
    gap: 4,
    variants: {
      size: {
        small: { padding: 8, paddingHorizontal: 10, gap: 2 },
        medium: { padding: 10, paddingHorizontal: 12, gap: 4 },
        large: { padding: 12, paddingHorizontal: 14, gap: 6 },
      },
    },
  },
  buttonActive: {
    backgroundColor: theme.colors["gray/200"],
    variants: {
      type: {
        primary: { backgroundColor: theme.colors["emerald/600"] },
        danger: { backgroundColor: theme.alpha(theme.colors["main/error"], 0.8) },
        warning: { backgroundColor: theme.alpha(theme.colors["main/warning"], 0.8) },
      },
      disabled: {
        true: { backgroundColor: theme.colors["gray/100"] },
      },
    },
  },
  buttonText: {
    fontFamily: theme.fontFamily.Quicksand_600,
    color: theme.colors["gray/700"],
    fontSize: 15,
    variants: {
      type: {
        primary: { color: theme.colors["system/white"] },
        danger: { color: theme.colors["system/white"] },
        warning: { color: theme.colors["system/white"] },
      },
      size: {
        small: { fontSize: 12 },
        medium: { fontSize: 15 },
        large: { fontSize: 17 },
      },
      disabled: {
        true: { color: theme.colors["gray/300"] },
      },
    },
  },
  icon: {
    color: theme.colors["gray/700"],
    fontSize: 24,
    variants: {
      type: {
        primary: { color: theme.colors["system/white"] },
        danger: { color: theme.colors["system/white"] },
        warning: { color: theme.colors["system/white"] },
      },
      size: {
        small: { fontSize: 20 },
        medium: { fontSize: 24 },
        large: { fontSize: 28 },
      },
      disabled: {
        true: { color: theme.colors["gray/300"] },
      },
    },
  },
  iconWrapper: {
    flexDirection: "row",
  },
  iconSpacer: {
    height: 24,
    variants: {
      size: {
        small: { height: 20 },
        medium: { height: 24 },
        large: { height: 28 },
      },
    },
  },
}));
