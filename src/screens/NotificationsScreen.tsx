import { Text, View } from "react-native-ui-lib";
import LottieView from "lottie-react-native";

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

        <LottieView
          autoPlay
          style={{
            width: "100%",
            height: 300,
          }}
          source={require("../../assets/PRODUCT/Animation 06/drawkit-grape-animation-6-LOOP.json")}
        />

        <Text
          center
          marginT-12
        >{`When you get notifications,\nthey'll show up here`}</Text>
      </View>
    </ScreenLayout>
  );
}
