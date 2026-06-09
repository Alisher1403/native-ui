import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@src/shared/types/navigation/screen-params";
import { Button } from "@src/shared/ui";

export default function Home() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return <Button onPress={() => navigation.navigate("ComponentShowcase")}>Component Showcase</Button>;
}
