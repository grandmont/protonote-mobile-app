import { ScrollView } from "react-native";
import { LoaderScreen, Text, View } from "react-native-ui-lib";

import Divider from "@components/elements/Divider/Divider";
import ScreenSection from "@components/layout/ScreenSection";
import SpotifyMemo from "@components/integrations/spotify/SpotifyMemo/SpotifyMemo";
import CreateMemoButton from "@components/elements/CreateMemoButton/CreateMemoButton";
import { Proto } from "@graphql/generated";
import DeezerMemo from "@components/integrations/deezer/DeezerMemo/DeezerMemo";

interface MemoDetailsSectionProps extends Partial<Proto> {
  protoId: number;
  localLoading?: boolean;
}

export default function MemoDetailsSection({
  id,
  description,
  dateString,
  integrations = [],
  deezer = [],
  _count,
  protoId,
  localLoading,
}: MemoDetailsSectionProps) {
  return (
    <ScrollView style={{ flex: 1, height: "100%" }}>
      {!localLoading ? (
        <>
          {description ? (
            <ScreenSection title="Description" style={{ minHeight: 96 }}>
              <Text p>{description}</Text>
            </ScreenSection>
          ) : (
            <View flex center height={96}>
              <Text marginB-24>No memo found for this day</Text>

              <CreateMemoButton
                label="Add memo"
                dateString={dateString}
                editData={id && { id, description }}
              />
            </View>
          )}
        </>
      ) : (
        <View flex center height={96}>
          <LoaderScreen />
        </View>
      )}

      <Divider size="small" />

      {integrations.length > 0 && (
        <SpotifyMemo
          protoId={protoId}
          integrations={integrations}
          count={_count.integrations}
        />
      )}

      {deezer.length > 0 && (
        <DeezerMemo protoId={protoId} deezer={deezer} count={_count.deezer} />
      )}

      <Divider size="huge" />
    </ScrollView>
  );
}
