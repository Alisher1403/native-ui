import { Platform } from "react-native";
const isIOS = Platform.OS === "ios";

export const AppStyleSettings = {
  spacing: {
    0: 0,
    xs: 2,
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    xxl: 20,
    xxxl: 24,
  },

  fontSize: {
    xs: 10,
    sm: 12,
    base: 14,
    md: 16,
    lg: 20,
    xl: 24,
    xxl: 28,
    xxxl: 32,
  },

  radius: {
    0: 0,
    xs: 2,
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    xxl: 20,
    xxxl: 24,
    full: 9999,
  },

  fontFamily: {
    Inter_400: isIOS ? "Inter18pt-Regular" : "Inter_18pt-Regular",
    Inter_500: isIOS ? "Inter18pt-Medium" : "Inter_18pt-Medium",
    Inter_600: isIOS ? "Inter18pt-SemiBold" : "Inter_18pt-SemiBold",
    Inter_700: isIOS ? "Inter18pt-Bold" : "Inter_18pt-Bold",
    Unbounded_400: isIOS ? "Unbounded-Regular" : "Unbounded-Regular",
    Unbounded_500: isIOS ? "Unbounded-Medium" : "Unbounded-Medium",
    Unbounded_600: isIOS ? "Unbounded-SemiBold" : "Unbounded-SemiBold",
    Unbounded_700: isIOS ? "Unbounded-Bold" : "Unbounded-Bold",
  },

  alpha: (color?: string, opacity: number = 1) => {
    if (!color) return "transparent";
    if (opacity === 1) return color;
    const alpha = Math.round(opacity * 255)
      .toString(16)
      .padStart(2, "0");
    return color + alpha;
  },

  size(value: number) {
    return value;
  },
};
