import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

import useAuth from "../hooks/useAuth";

// Views
import AuthScreen from "../views/AuthScreen";
import HomeScreen from "../views/HomeScreen";
import CalendarScreen from "../views/CalendarScreen";
import SearchScreen from "../views/SearchScreen";
import ProfileScreen from "../views/ProfileScreen";

const Root = createStackNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TAB_ICON_SIZE = 24;

const AuthNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="Initial" component={AuthScreen} />
  </Stack.Navigator>
);

const AppNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Tab.Screen
      name="Home"
      options={{
        tabBarIcon: ({ focused }) => (
          <Ionicons
            name={`md-home${focused ? "" : "-outline"}`}
            size={TAB_ICON_SIZE}
            color={focused ? "blue" : "black"}
          />
        ),
      }}
      component={HomeScreen}
    />
    <Tab.Screen
      name="Search"
      options={{
        tabBarIcon: ({ focused }) => (
          <Ionicons
            name="md-search"
            size={TAB_ICON_SIZE}
            color={focused ? "blue" : "black"}
          />
        ),
      }}
      component={SearchScreen}
    />
    <Tab.Screen
      name="Calendar"
      options={{
        tabBarIcon: ({ focused }) => (
          <Ionicons
            name={`md-calendar-sharp`}
            size={TAB_ICON_SIZE}
            color={focused ? "blue" : "black"}
          />
        ),
      }}
      component={CalendarScreen}
    />
    <Tab.Screen
      name="Profile"
      options={{
        tabBarIcon: ({ focused }) => (
          <Ionicons
            name={`md-person${focused ? "" : "-outline"}`}
            size={TAB_ICON_SIZE}
            color={focused ? "blue" : "black"}
          />
        ),
      }}
      component={ProfileScreen}
    />
  </Tab.Navigator>
);

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
