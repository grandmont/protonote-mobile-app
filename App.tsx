import "react-native-gesture-handler";
import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ApolloProvider } from "@apollo/client";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistCache } from "apollo3-cache-persist";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { cache, client } from "./src/services/client";
import useAuth from "./src/hooks/useAuth";

// Views
import AuthScreen from "./src/views/AuthScreen";
import HomeScreen from "./src/views/HomeScreen";
import ProfileScreen from "./src/views/ProfileScreen";

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

export default function App() {
  const { isLoggedIn } = useAuth();
  const [loadingCache, setLoadingCache] = useState(true);

  useEffect(() => {
    persistCache({
      cache,
      storage: AsyncStorage,
    }).then(() => setLoadingCache(false));
  }, []);

  if (loadingCache) {
    return null;
  }

  return (
    <ApolloProvider client={client}>
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
    </ApolloProvider>
  );
}
