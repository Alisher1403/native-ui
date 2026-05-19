import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export function Insets() {}

Insets.Bottom = function () {
  const insets = useSafeAreaInsets();
  return <View style={{ height: insets.bottom }} />;
};

Insets.Top = function () {
  const insets = useSafeAreaInsets();
  return <View style={{ height: insets.top }} />;
};
