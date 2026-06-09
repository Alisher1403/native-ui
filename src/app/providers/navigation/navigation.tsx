import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ComponentShowcase from "@src/screens/component-showcase/component-showcase";
import Home from "@src/screens/home/home";
import { RootStackParamList } from "@src/shared/types/navigation/screen-params";

const Stack = createNativeStackNavigator<RootStackParamList>();

export function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ComponentShowcase" component={ComponentShowcase} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
