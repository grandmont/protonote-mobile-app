import { FlashList } from "@shopify/flash-list";

import SpotifyCard from "@components/integrations/spotify/SpotifyCard/SpotifyCard";
import Divider from "@components/elements/Divider/Divider";
import { IntegrationData, SpotifyItem } from "@graphql/generated";

type ListItemType = {
  spacing?: boolean;
} & Partial<IntegrationData>;

interface SpotifyListProps {
  data: ListItemType[];
}

export default function SpotifyList({ data }: SpotifyListProps) {
  const renderItem = ({
    item,
    index,
  }: {
    item: ListItemType;
    index: number;
  }) => {
    if (item.spacing) {
      return <Divider size="huge" />;
    }

    const isLast = index === data.length - 1;

    const parsedData = JSON.parse(item.data).track as SpotifyItem;

    return (
      <>
        <SpotifyCard mode="light" {...parsedData} />
        {!isLast && <Divider size="tiny" showDividerLine />}
      </>
    );
  };

  const spacing: ListItemType = { id: 0, spacing: true };

  return (
    <FlashList
      data={[...data, spacing]}
      renderItem={renderItem}
      estimatedItemSize={data.length}
      keyExtractor={(item) => String(item.id)}
      showsVerticalScrollIndicator={false}
    />
  );
}
