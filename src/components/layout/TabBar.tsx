import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import { Card, View, TouchableOpacity } from "react-native-ui-lib";

import { BOTTOM_TAB_ICON_SIZE } from "../../config/constants";

export default function TabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  return (
    <Card style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const { tabBarAccessibilityLabel, tabBarTestID, tabBarIcon } = options;

        if (!tabBarIcon) return null;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        const defaultTabBarIconProps = {
          focused: isFocused,
          color: isFocused ? "white" : "black",
          size: BOTTOM_TAB_ICON_SIZE,
        };

        return (
          <View key={route.key} flex center>
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityLabel={tabBarAccessibilityLabel}
              testID={tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={[
                styles.tabBarButton,
                { backgroundColor: isFocused ? "blue" : "white" },
              ]}
            >
              {tabBarIcon && tabBarIcon(defaultTabBarIconProps)}
            </TouchableOpacity>
          </View>
        );
      })}
    </Card>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    paddingVertical: 10,
    borderRadius: 60,
    marginBottom: 36,
    marginHorizontal: 60,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
  tabBarButton: {
    padding: 12,
    paddingHorizontal: 13,
    borderRadius: 60,
  },
});
