import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

import { BOTTOM_TAB_ICON_SIZE } from "../config/constants";

// Screens
import HomeScreen from "../screens/HomeScreen";
import CalendarScreen from "../screens/CalendarScreen";
import SearchScreen from "../screens/SearchScreen";
import AnalyticsScreen from "../screens/AnalyticsScreen";
import CreateMemoScreen from "../screens/CreateMemoScreen";
import MemoScreen from "../screens/MemoScreen";

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
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
              size={BOTTOM_TAB_ICON_SIZE}
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
              size={BOTTOM_TAB_ICON_SIZE}
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
              size={BOTTOM_TAB_ICON_SIZE}
              color={focused ? "blue" : "black"}
            />
          ),
        }}
        component={CalendarScreen}
      />
      <Tab.Screen
        name="Analytics"
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={`md-stats-chart${focused ? "" : "-outline"}`}
              size={BOTTOM_TAB_ICON_SIZE}
              color={focused ? "blue" : "black"}
            />
          ),
        }}
        component={AnalyticsScreen}
      />
      <Tab.Screen
        name="CreateMemo"
        options={{ tabBarButton: () => null }}
        component={CreateMemoScreen}
      />
      <Tab.Screen
        name="Memo"
        options={{ tabBarButton: () => null }}
        component={MemoScreen}
      />
    </Tab.Navigator>
  );
}
