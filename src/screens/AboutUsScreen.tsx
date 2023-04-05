import { Image, Text, View } from "react-native-ui-lib";
import { A } from "@expo/html-elements";

import Constants from "expo-constants";

import ScreenLayout from "@components/layout/ScreenLayout";
import Header from "@components/elements/Header/Header";
import i18n from "@i18n";

export default function AboutUsScreen() {
  const title = i18n.t("settings.general.aboutUs");

  return (
    <ScreenLayout>
      <Header title={title} canGoBack />

      <View flex center>
        <Image
          source={require("../../assets/icon.png")}
          style={{
            width: 144,
            height: 144,
            borderRadius: 25,
          }}
        />
        <Text text30BO marginV-12>
          Beememo
        </Text>

        <Text marginB-12>
          {i18n.t("aboutUs.version")} {Constants.manifest.version}
        </Text>

        <Text center marginB-12>
          © 2023 Grandmont. All rights reserved
        </Text>
        <A style={{ color: "blue" }} href="https://grandmont.io">
          grandmont.io
        </A>
      </View>
    </ScreenLayout>
  );
}
