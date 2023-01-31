import { Card, View, TouchableOpacity } from "react-native-ui-lib";

export default function TabBar({ state, descriptors, navigation }) {
  return (
    <Card
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",

        paddingVertical: 8,
        borderRadius: 60,
        marginBottom: 48,
        marginHorizontal: 60,

        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const {
          tabBarAccessibilityLabel,
          tabBarTestID,
          tabBarIcon,
          tabBarButton,
        } = options;

        if (tabBarButton) return null;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
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

        return (
          <View key={route} flex center>
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityLabel={tabBarAccessibilityLabel}
              testID={tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{
                backgroundColor: isFocused ? "blue" : "white",
                padding: 12,
                paddingHorizontal: 13,
                borderRadius: 60,
              }}
            >
              {tabBarIcon && tabBarIcon({ focused: isFocused })}
            </TouchableOpacity>
          </View>
        );
      })}
    </Card>
  );
}
