import { useNavigation } from "@react-navigation/native";
import { Card, View, Text, Button } from "react-native-ui-lib";
import Ionicons from "@expo/vector-icons/Ionicons";

import Divider from "../../elements/Divider/Divider";
import {
  formatDateToDateString,
  getWrittenDateString,
} from "../../../utils/parsers";
import { BOTTOM_TAB_ICON_SIZE } from "../../../config/constants";

interface MemoCardProps {
  title: string;
  date: string;
}

export default function MemoCard({ title, date }: MemoCardProps) {
  const navigation = useNavigation();

  const handleEditMemo = () => {
    const dateString = formatDateToDateString(date);
    navigation.navigate("Memo", { date: { dateString } });
  };

  return (
    <Card padding-16 paddingT-12>
      <View row spread centerV>
        <Text text80M>{getWrittenDateString(date)}</Text>

        <Button onPress={handleEditMemo} link>
          <Ionicons name="md-create-outline" size={BOTTOM_TAB_ICON_SIZE} />
        </Button>
      </View>
      <Divider size="tiny" showDividerLine />
      <Text p>{title}</Text>
    </Card>
  );
}
