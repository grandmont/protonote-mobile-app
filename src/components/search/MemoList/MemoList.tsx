import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Card, Text, View } from "react-native-ui-lib";

import { Proto } from "../../../graphql/generated";
import Divider from "../../elements/Divider/Divider";

type MemoDataType = {
  spacing?: boolean;
} & Partial<Proto>;

interface MemoListProps {
  data: Partial<MemoDataType>[];
}

interface MemoListItemProps extends MemoDataType {}

const MemoListItem = ({
  title,
  description,
  dateString,
}: MemoListItemProps) => {
  const navigation = useNavigation();

  const handleGoToMemo = () => {
    navigation.navigate("Memo" as any, { date: { dateString } });
  };

  return (
    <View marginT-12>
      <Card
        padding-16
        paddingT-12
        enableShadow={false}
        style={{
          borderWidth: 1,
          borderColor: "#ededed",
        }}
        onPress={handleGoToMemo}
      >
        <Text text80M marginB-6>
          {title}
        </Text>
        <Text numberOfLines={1}>{description}</Text>
      </Card>
    </View>
  );
};

export default function MemoList({ data = [] }: MemoListProps) {
  const renderItem = ({ item }: { item: MemoDataType }) => {
    if (item.spacing) {
      return <Divider size="huge" />;
    }

    return <MemoListItem {...item} />;
  };

  const spacing: MemoDataType = { id: 0, spacing: true };

  return (
    <View width="100%">
      <FlatList
        data={[...data, spacing]}
        renderItem={renderItem}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        style={{
          height: "100%",
          flexGrow: 0,
        }}
      />
    </View>
  );
}
