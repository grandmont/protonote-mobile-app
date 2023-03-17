import { FlatList } from "react-native";
import { View } from "react-native-ui-lib";

import { IntegrationData, SpotifyItem } from "../../../../graphql/generated";
import SpotifyCard from "../SpotifyCard/SpotifyCard";
import Divider from "../../../elements/Divider/Divider";

type ListItemType = {
  spacing?: boolean;
} & Partial<IntegrationData>;

interface SpotifyListProps {
  data: ListItemType[];
}

export default function SpotifyList({ data }: SpotifyListProps) {
  const renderItem = ({ item }: { item: ListItemType }) => {
    if (item.spacing) {
      return <Divider size="huge" />;
    }

    const parsedData = JSON.parse(item.data).track as SpotifyItem;

    return (
      <View marginB-12>
        <SpotifyCard {...parsedData} />
      </View>
    );
  };

  const spacing: ListItemType = { id: 0, spacing: true };

  return (
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
  );
}
