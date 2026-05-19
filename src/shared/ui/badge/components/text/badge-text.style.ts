import { StyleSheet } from "react-native-unistyles";

export const styles = StyleSheet.create(theme => ({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    borderRadius: 14,
    alignSelf: "flex-start",
    variants: {
      size: {
        small: { paddingVertical: 3, paddingHorizontal: 6 },
        medium: { paddingVertical: 3, paddingHorizontal: 8 },
        large: { paddingVertical: 4, paddingHorizontal: 8 },
      },
    },
  },
}));
