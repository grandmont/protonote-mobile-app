import { View, Text, Button, Image } from "react-native-ui-lib";
import CreateMemoButton from "../../elements/CreateMemoButton/CreateMemoButton";

export default function NoMemoSection() {
  return (
    <View flex center>
      <Text h2>How was your day?</Text>
      <Image
        source={require("../../../../assets/bed.png")}
        style={{
          width: 300,
          height: 250,
        }}
      />
      <Text p marginB-24 center>
        Add today's memo and keep{"\n"}tracking your progress!
      </Text>
      <CreateMemoButton label="Let's do it" />
    </View>
  );
}
