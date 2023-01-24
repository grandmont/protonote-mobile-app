import { View, Text, Button, Image } from "react-native-ui-lib";

// import MemoCard from "../../elements/MemoCard/MemoCard";

export default function MemoSection() {
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
        Add today's memo and keep{"\n"}tracking your life!
      </Text>
      <Button label="Let's do it" />
    </View>
  );
}
