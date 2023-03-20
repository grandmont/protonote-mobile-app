import { ScrollView } from "react-native";
import { Text, View } from "react-native-ui-lib";

import Divider from "@components/elements/Divider/Divider";
import ScreenSection from "@components/layout/ScreenSection";
import SpotifyMemo from "@components/integrations/spotify/SpotifyMemo/SpotifyMemo";
import CreateMemoButton from "@components/elements/CreateMemoButton/CreateMemoButton";
import { Proto } from "@graphql/generated";

interface MemoDetailsSectionProps extends Partial<Proto> {}

export default function MemoDetailsSection({
  id,
  description,
  dateString,
  integrations = [],
  _count,
}: MemoDetailsSectionProps) {
  return (
    <ScrollView style={{ flex: 1, height: "100%" }}>
      {description ? (
        <ScreenSection title="Description">
          <Text p>{description}</Text>
        </ScreenSection>
      ) : (
        <View flex center marginT-24>
          <Text marginB-24>No memo found for this day</Text>

          <CreateMemoButton
            label="Add memo"
            dateString={dateString}
            editData={id && { id, description }}
          />
        </View>
      )}

      <Divider size="small" />

      {integrations.length > 0 && (
        <SpotifyMemo
          protoId={id}
          integrations={integrations}
          count={_count.integrations}
        />
      )}
    </ScrollView>
  );
}
