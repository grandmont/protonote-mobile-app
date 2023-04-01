import { useNavigation } from "@react-navigation/native";
import { View, Text, Button } from "react-native-ui-lib";
import { FontAwesome5 } from "@expo/vector-icons";

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
      title: "Deezer",
      protoId,
      provider: IntegrationProvider.Deezer,
    });
  };

  return (
    <ScreenSection
      title={
        <View row centerV marginB-8>
          <FontAwesome5 name="deezer" size={16} color="black" />
          <Text title marginL-6>
            deezer
          </Text>
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
