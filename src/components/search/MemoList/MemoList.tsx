import { FlashList } from "@shopify/flash-list";
import { useNavigation } from "@react-navigation/native";
import { Card, Text, View } from "react-native-ui-lib";

import Divider from "@components/elements/Divider/Divider";
import { Proto } from "@graphql/generated";
import { ESTIMATED_LIST_SIZE } from "@config/constants";

interface MemoListProps {
  data?: ListItemType<Proto>[];
}

interface MemoListItemProps extends ListItemType<Proto> {}

const MemoListItem = ({
  title,
  description,
  dateString,
}: MemoListItemProps) => {
  const navigation = useNavigation();

  const handleGoToMemo = () => {
    navigation.navigate("Memo", { date: { dateString } });
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
  const renderItem = ({ item }: { item: ListItemType<Proto> }) => {
    if (item.spacing) {
      return <Divider size="huge" />;
    }

    return <MemoListItem {...item} />;
  };

  const spacing: ListItemType<Proto> = { id: 0, spacing: true };

  return (
    <View flex width="100%">
      <FlashList
        data={[...data, spacing]}
        renderItem={renderItem}
        estimatedItemSize={ESTIMATED_LIST_SIZE}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
