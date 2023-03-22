import { View, Text } from "react-native-ui-lib";
import LottieView from "lottie-react-native";

import CreateMemoButton from "@components/elements/CreateMemoButton/CreateMemoButton";

export default function NoMemoSection({ editData }) {
  return (
    <View flex center bottom paddingB-24>
      <Text h2>How was your day?</Text>

      <LottieView
        autoPlay
        style={{
          width: "100%",
          height: 250,
        }}
        source={require("../../../../assets/animations/Animation 07/drawkit-grape-animation-7-LOOP.json")}
      />

      <Text p marginB-24 center>
        Add today's memo and keep{"\n"}tracking your progress!
      </Text>

      <CreateMemoButton label="Let's do it" editData={editData} />
    </View>
  );
}
