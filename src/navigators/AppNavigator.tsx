import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

import TabBar from "@components/layout/TabBar";

// Screens
import HomeScreen from "@screens/HomeScreen";
import SearchScreen from "@screens/SearchScreen";
import CalendarScreen from "@screens/CalendarScreen";
import AnalyticsScreen from "@screens/AnalyticsScreen";
import CreateMemoScreen from "@screens/CreateMemoScreen";
import MemoScreen from "@screens/MemoScreen";
import NotificationsScreen from "@screens/NotificationsScreen";
import SettingsScreen from "@screens/SettingsScreen";
import IntegrationsScreen from "@screens/IntegrationsScreen";
import AboutUsScreen from "@screens/AboutUsScreen";
import IntegrationDataScreen from "@screens/IntegrationDataScreen";
import AccountScreen from "@screens/AccountScreen";
import DeleteAccountScreen from "@screens/DeleteAccountScreen";

const Stack = createStackNavigator();
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

function TabNavigator() {
  return (
    <Tab.Navigator
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
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
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Tab" component={TabNavigator} />

      {/* Independent */}
      <Stack.Screen name="CreateMemo" component={CreateMemoScreen} />
      <Stack.Screen name="Memo" component={MemoScreen} />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="IntegrationData" component={IntegrationDataScreen} />
      <Stack.Screen name="DeleteAccount" component={DeleteAccountScreen} />

      {/* Settings */}
      <Stack.Screen name="Account" component={AccountScreen} />
      <Stack.Screen name="Integrations" component={IntegrationsScreen} />
      <Stack.Screen name="AboutUs" component={AboutUsScreen} />
    </Stack.Navigator>
  );
}
