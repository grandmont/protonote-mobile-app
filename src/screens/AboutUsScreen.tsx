import { Text, View } from "react-native-ui-lib";
import { A } from "@expo/html-elements";

import ScreenLayout from "../components/layout/ScreenLayout";
import Header from "../components/elements/Header/Header";

export default function AboutUsScreen() {
  const title = "About us";

  return (
    <ScreenLayout>
      <Header title={title} canGoBack />

      <View flex center>
        <Text text30BO marginB-12>
          beememo
        </Text>
        <Text
          center
          marginB-12
        >{`Some information about the app\nLorem ipsum dolor`}</Text>

        <A style={{ color: "blue" }} href="https://grandmont.io">
          grandmont.io
        </A>

        <Text marginT-12>version 1.0.0</Text>
      </View>
    </ScreenLayout>
  );
}
