import { useNavigation } from "@react-navigation/native";
import { Image } from "react-native";
import { View, Button } from "react-native-ui-lib";

import ScreenSection from "@components/layout/ScreenSection";
import {
  DeezerData,
  DeezerDataOnProtos,
  IntegrationProvider,
} from "@graphql/generated";
import DeezerCard from "../DeezerCard/DeezerCard";

interface DeezerMemoProps {
  protoId: number;
  deezer: DeezerDataOnProtos[];
  count: number;
}

export default function DeezerMemo({
  protoId,
  deezer,
  count,
}: DeezerMemoProps) {
  const navigation = useNavigation();

  const parseItem = ({ data }: DeezerData) => {
    return JSON.parse(data) as DeezerItemType;
  };

  const handleViewData = () => {
    navigation.navigate("IntegrationData", {
      title: (
        <View row centerH marginT-6>
          <Image
            source={require("assets/deezer-logo.png")}
            style={{
              width: 76,
              height: 15,
            }}
          />
        </View>
      ),
      protoId,
      provider: IntegrationProvider.Deezer,
    });
  };

  return (
    <ScreenSection
      title={
        <View row centerV marginB-12>
          <Image
            source={require("assets/deezer-logo.png")}
            style={{
              width: 76,
              height: 15,
            }}
          />
        </View>
      }
    >
      {deezer.map(({ deezerData }) => (
        <View key={deezerData.id} marginB-12>
          <DeezerCard {...parseItem(deezerData)} />
        </View>
      ))}

      <Button
        onPress={handleViewData}
        label={`View all ${count} songs in this day`}
        link
      />
    </ScreenSection>
  );
}
