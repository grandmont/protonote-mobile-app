import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-ui-lib";

interface CreateMemoButton {
  label: string;
  dateString?: string;
}

export default function CreateMemoButton({ label, dateString = null }) {
  const navigation = useNavigation();

  const handleCreateMemo = () => {
    navigation.navigate("CreateMemo" as any, { date: { dateString } });
  };

  return <Button label={label} onPress={handleCreateMemo} />;
}
