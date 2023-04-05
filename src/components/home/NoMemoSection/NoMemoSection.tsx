import { View, Text } from "react-native-ui-lib";
import LottieView from "lottie-react-native";

import CreateMemoButton from "@components/elements/CreateMemoButton/CreateMemoButton";
import i18n from "@i18n";

export default function NoMemoSection({ editData }) {
  return (
    <View flex center bottom paddingB-24>
      <Text h2>{i18n.t("home.memo.howWasYourDay")}</Text>

      <LottieView
        autoPlay
        style={{
          width: "100%",
          height: 250,
        }}
        source={require("../../../../assets/animations/Animation 07/drawkit-grape-animation-7-LOOP.json")}
      />

      <Text p marginB-24 center>
        {i18n.t("home.memo.addTodaysMemo")}
      </Text>

      <CreateMemoButton
        label={i18n.t("home.memo.letsDoIt")}
        editData={editData}
      />
    </View>
  );
}
