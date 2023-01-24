import { View, Text, Button, Image } from "react-native-ui-lib";

// import MemoCard from "../../elements/MemoCard/MemoCard";

export default function MemoSection() {
  return (
    <View flex center>
      <Image
        source={require("../../../../assets/icon.png")}
        style={{
          width: 200,
          height: 200,
        }}
        marginB-12
      />
      <Text h2>How was your day?</Text>
      <Text p marginV-12>
        You didn't make today's memo
      </Text>
      <Button label="Let's do it" />
    </View>
  );
}
