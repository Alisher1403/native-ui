import { Platform } from "react-native";
const isIOS = Platform.OS === "ios";

export const AppStyleSettings = {
  fontFamily: {
    Quicksand_400: "Quicksand-Regular",
    Quicksand_500: "Quicksand-Medium",
    Quicksand_600: "Quicksand-SemiBold",
    Quicksand_700: "Quicksand-Bold",

    Unbounded_400: "Unbounded-Regular",
    Unbounded_500: "Unbounded-Medium",
    Unbounded_600: "Unbounded-SemiBold",
    Unbounded_700: "Unbounded-Bold",
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
