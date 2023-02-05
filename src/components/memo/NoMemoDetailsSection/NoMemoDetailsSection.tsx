import { View, Text } from "react-native-ui-lib";
import CreateMemoButton from "../../elements/CreateMemoButton/CreateMemoButton";

export default function NoMemoDetailsSection({ dateString }) {
  return (
    <View flex center>
      <Text marginB-24>No memo found for this day</Text>

      <CreateMemoButton label="Add memo" dateString={dateString} />
    </View>
  );
}
