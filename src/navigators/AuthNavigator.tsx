import { createStackNavigator } from "@react-navigation/stack";

// Screens
import AuthScreen from "../screens/AuthScreen";

const Stack = createStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Initial" component={AuthScreen} />
    </Stack.Navigator>
  );
}
