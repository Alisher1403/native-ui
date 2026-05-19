import { StyleSheet } from "react-native-unistyles";

export const styles = StyleSheet.create(theme => ({
  container: {
    alignSelf: "flex-start",
    variants: {
      disabled: {
        true: {
          opacity: 0.5,
          pointerEvents: "none",
        },
      },
    },
  },
  starsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
}));
