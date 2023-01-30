import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

import { BOTTOM_TAB_ICON_SIZE } from "../config/constants";

// Screens
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import CalendarScreen from "../screens/CalendarScreen";
import AnalyticsScreen from "../screens/AnalyticsScreen";
import CreateMemoScreen from "../screens/CreateMemoScreen";
import MemoScreen from "../screens/MemoScreen";

const Tab = createBottomTabNavigator();

const tabs = [
  {
    name: "Home",
    icon: { name: "md-home", variant: "-outline" },
    component: HomeScreen,
  },
  { name: "Search", icon: { name: "md-search" }, component: SearchScreen },
  {
    name: "Calendar",
    icon: { name: "md-calendar-sharp" },
    component: CalendarScreen,
  },
  {
    name: "Analytics",
    icon: { name: "md-stats-chart", variant: "-outline" },
    component: AnalyticsScreen,
  },
];

export default function AppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {tabs.map(({ icon, ...props }) => (
        <Tab.Screen
          {...props}
          key={icon.name}
          options={{
            tabBarIcon: ({ focused }) => {
              const hasVariant = !!icon.variant;
              const focusedName = focused ? "" : icon.variant;
              const iconName = `${icon.name}${
                hasVariant ? focusedName : ""
              }` as any;
              const color = focused ? "blue" : "black";

              return (
                <Ionicons
                  name={iconName}
                  size={BOTTOM_TAB_ICON_SIZE}
                  color={color}
                />
              );
            },
          }}
        />
      ))}

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
