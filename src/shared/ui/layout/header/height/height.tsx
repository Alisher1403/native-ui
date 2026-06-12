import { useHeaderHeight } from "@react-navigation/elements";
import { View } from "react-native";

export function LayoutHeaderHeight() {
  const headerHeight = useHeaderHeight();
  return <View style={{ height: headerHeight }} />;
}
