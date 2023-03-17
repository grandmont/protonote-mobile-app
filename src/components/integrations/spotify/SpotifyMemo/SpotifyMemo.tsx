import { useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "react-native-ui-lib";
import Entypo from "@expo/vector-icons/Entypo";

import {
  IntegrationData,
  IntegrationDataOnProtos,
  SpotifyItem,
} from "../../../../graphql/generated";
import ScreenSection from "../../../layout/ScreenSection";
import SpotifyCard from "../SpotifyCard/SpotifyCard";

interface SpotifyMemoProps {
  protoId: number;
  integrations: IntegrationDataOnProtos[];
  count: number;
}

export default function SpotifyMemo({
  protoId,
  integrations,
  count,
}: SpotifyMemoProps) {
  const navigation = useNavigation();

  const parseItem = ({ data }: IntegrationData) => {
    return JSON.parse(data).track as SpotifyItem;
  };

  const handleViewIntegrationData = () => {
    navigation.navigate("IntegrationData" as any, {
      title: "Spotify",
      protoId,
    });
  };

  return (
    <ScreenSection
      title={
        <View row centerV marginB-8>
          <Entypo name="spotify" size={18} />
          <Text title marginL-6>
            Spotify
          </Text>
        </View>
      }
    >
      {integrations.map(({ integrationData }) => (
        <View key={integrationData.id} marginB-12>
          <SpotifyCard {...parseItem(integrationData)} />
        </View>
      ))}

      <Button
        onPress={handleViewIntegrationData}
        label={`View all ${count} songs in this day`}
        link
      />
    </ScreenSection>
  );
}
