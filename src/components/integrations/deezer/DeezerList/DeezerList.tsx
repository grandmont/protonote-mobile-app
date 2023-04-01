import { FlashList } from "@shopify/flash-list";

import DeezerCard from "@components/integrations/deezer/DeezerCard/DeezerCard";
import Divider from "@components/elements/Divider/Divider";
import { DeezerData } from "@graphql/generated";
import { ESTIMATED_LIST_SIZE } from "@config/constants";

interface DeezerListProps {
  data: ListItemType<DeezerData>[];
}

export default function DeezerList({ data }: DeezerListProps) {
  const renderItem = ({
    item,
    index,
  }: {
    item: ListItemType<DeezerData>;
    index: number;
  }) => {
    if (item.spacing) {
      return <Divider size="huge" />;
    }

    const isLast = index === data.length - 1;

    const parsedData = JSON.parse(item.data) as DeezerItemType;

    return (
      <>
        <DeezerCard mode="light" {...parsedData} />
        {!isLast && <Divider size="tiny" showDividerLine />}
      </>
    );
  };

  const spacing: ListItemType<DeezerData> = { id: 0, spacing: true };

  return (
    <FlashList
      data={[...data, spacing]}
      renderItem={renderItem}
      estimatedItemSize={ESTIMATED_LIST_SIZE}
      keyExtractor={(item) => String(item.id)}
      showsVerticalScrollIndicator={false}
    />
  );
}
