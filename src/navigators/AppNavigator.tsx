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
import TabBar from "../components/layout/TabBar";

const Tab = createBottomTabNavigator();

const tabs = [
  {
    name: "Home",
    icon: { name: "md-home-sharp" },
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
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        lazy: false,
      }}
    >
      {tabs.map(({ icon, ...props }) => (
        <Tab.Screen
          {...props}
          key={icon.name}
          options={{
            tabBarIcon: ({ focused, ...props }) => {
              const hasVariant = !!icon.variant;
              const focusedName = focused ? "" : icon.variant;
              const iconName = `${icon.name}${
                hasVariant ? focusedName : ""
              }` as any;

              return <Ionicons name={iconName} {...props} />;
            },
          }}
        />
      ))}

      <Tab.Screen name="CreateMemo" component={CreateMemoScreen} />
      <Tab.Screen name="Memo" component={MemoScreen} />
    </Tab.Navigator>
  );
}
