import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-ui-lib";

import { Proto } from "@graphql/generated";

interface CreateMemoButtonProps {
  label: string;
  dateString?: string;
  editData?: Partial<Proto>;
}

export default function CreateMemoButton({
  label,
  dateString = null,
  editData = null,
}: CreateMemoButtonProps) {
  const navigation = useNavigation();

  const handleCreateMemo = () => {
    navigation.navigate("CreateMemo", {
      date: { dateString, editData },
    });
  };

  return <Button label={label} onPress={handleCreateMemo} />;
}
