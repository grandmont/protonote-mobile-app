import { Text, View } from "react-native-ui-lib";
import LottieView from "lottie-react-native";

import ScreenLayout from "@components/layout/ScreenLayout";
import Header from "@components/elements/Header/Header";
import i18n from "@i18n";

export default function NotificationsScreen() {
  const title = i18n.t("notifications.title");

  return (
    <ScreenLayout>
      <Header title={title} canGoBack />

      <View flex center>
        <Text title marginB-12>
          {i18n.t("notifications.noNotificationsYet")}
        </Text>

        <LottieView
          autoPlay
          style={{
            width: "100%",
            height: 300,
          }}
          source={require("../../assets/animations/Animation 06/drawkit-grape-animation-6-LOOP.json")}
        />

        <Text p center marginT-12>
          {i18n.t("notifications.description")}
        </Text>
      </View>
    </ScreenLayout>
  );
}
