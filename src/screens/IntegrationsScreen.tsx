import { Text, View } from "react-native-ui-lib";

import ScreenLayout from "../components/layout/ScreenLayout";
import Header from "../components/elements/Header/Header";

export default function IntegrationsScreen() {
  const title = "Integrations";

  return (
    <ScreenLayout>
      <Header title={title} canGoBack />

      <View flex center>
        <Text title marginB-12>
          There are no connected apps
        </Text>
        <Text
          center
        >{`Connect your favorite socials and\nboost your memos!`}</Text>
      </View>
    </ScreenLayout>
  );
}
