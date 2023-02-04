import { Text, View } from "react-native-ui-lib";

import ScreenLayout from "../components/layout/ScreenLayout";
import Header from "../components/elements/Header/Header";

export default function NotificationsScreen() {
  const title = "Notifications";

  return (
    <ScreenLayout>
      <Header title={title} canGoBack />

      <View flex center>
        <Text title marginB-12>
          No notifications yet
        </Text>
        <Text
          center
        >{`When you get notifications,\nthey'll show up here`}</Text>
      </View>
    </ScreenLayout>
  );
}
