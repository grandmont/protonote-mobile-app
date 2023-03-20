import { Button, Colors } from "react-native-ui-lib";
import Feather from "@expo/vector-icons/Feather";

export default function SaveMemoAction({ onPress, disabled, loading }) {
  return (
    <Button onPress={onPress} disabled={disabled} hitSlop={5} padding-4 link>
      <Feather
        name={loading ? "loader" : "check"}
        color={loading ? "grey" : Colors.link}
        size={22}
      />
    </Button>
  );
}
