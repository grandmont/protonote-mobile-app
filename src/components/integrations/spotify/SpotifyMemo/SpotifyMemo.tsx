import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button, View } from "react-native-ui-lib";

import ScreenSection from "@components/layout/ScreenSection";
import SpotifyCard from "@components/integrations/spotify/SpotifyCard/SpotifyCard";
import {
  IntegrationData,
  IntegrationDataOnProtos,
  IntegrationProvider,
  SpotifyItem,
} from "@graphql/generated";

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
    navigation.navigate("IntegrationData", {
      title: (
        <View row centerH marginT-4>
          <Image
            source={require("assets/Spotify_Logo_RGB_Black.png")}
            style={{
              width: 76,
              height: 23,
            }}
          />
        </View>
      ),
      protoId,
      provider: IntegrationProvider.Spotify,
    });
  };

  return (
    <ScreenSection
      title={
        <View row centerV marginB-12>
          <Image
            source={require("assets/Spotify_Logo_RGB_Black.png")}
            style={{
              width: 76,
              height: 23,
            }}
          />
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
