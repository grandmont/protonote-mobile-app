import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import useAuth from "../hooks/useAuth";

// Navigators
import AuthNavigator from "./AuthNavigator";
import AppNavigator from "./AppNavigator";

const Root = createStackNavigator();

export default function RootNavigator() {
  const { isLoggedIn } = useAuth();

  return (
    <NavigationContainer>
      <Root.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {!isLoggedIn ? (
          <Root.Screen name="Auth" component={AuthNavigator} />
        ) : (
          <Root.Screen name="App" component={AppNavigator} />
        )}
      </Root.Navigator>
    </NavigationContainer>
  );
}
