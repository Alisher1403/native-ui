import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ComponentShowcase from "@src/screens/component-showcase/component-showcase";
import Home from "@src/screens/home/home";

export type RootStackParamList = {
  Home: undefined;
  ComponentsShowcase: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ComponentsShowcase" component={ComponentShowcase} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
