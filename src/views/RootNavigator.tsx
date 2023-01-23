import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import useAuth from "../hooks/useAuth";

// Views
import AuthScreen from "./AuthScreen";
import HomeScreen from "./HomeScreen";
import ProfileScreen from "./ProfileScreen";

const Root = createStackNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Initial" component={AuthScreen} />
  </Stack.Navigator>
);

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
);

export default function RootNavigator() {
  const { isLoggedIn } = useAuth();

  console.log("isLoggedIn", isLoggedIn);

  return (
    <NavigationContainer>
      <Root.Navigator>
        {!isLoggedIn ? (
          <Root.Screen name="Auth" component={AuthNavigator} />
        ) : (
          <Root.Screen name="App" component={AppNavigator} />
        )}
      </Root.Navigator>
      <StatusBar style="light" />
    </NavigationContainer>
  );
}
