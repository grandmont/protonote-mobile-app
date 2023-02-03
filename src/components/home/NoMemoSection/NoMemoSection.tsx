import { useNavigation } from "@react-navigation/native";
import { View, Text, Button, Image } from "react-native-ui-lib";

export default function NoMemoSection() {
  const navigation = useNavigation();

  const handleCreateMemo = () => {
    navigation.navigate("CreateMemo" as any);
  };

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
      <Button label="Let's do it" onPress={handleCreateMemo} />
    </View>
  );
}
