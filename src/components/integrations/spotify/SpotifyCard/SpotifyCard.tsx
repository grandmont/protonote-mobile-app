import { Linking } from "react-native";
import { Card, View, Colors, Image, Text } from "react-native-ui-lib";
import Entypo from "@expo/vector-icons/Entypo";

import { BOTTOM_TAB_ICON_SIZE } from "../../../../config/constants";
import { SpotifyItem } from "../../../../graphql/generated";

interface SpotifyCardProps extends SpotifyItem {}

export default function SpotifyCard(props: SpotifyCardProps) {
  const {
    name,
    album: { artists, images },
    external_urls: { spotify },
  } = props;

  const [{ name: artistName }] = artists;
  const [, albumCover] = images;

  const handleGoToSpotify = async () => {
    const supported = await Linking.canOpenURL(spotify);

    if (supported) {
      await Linking.openURL(spotify);
    }
  };

  return (
    <Card
      height={64}
      style={{
        backgroundColor: Colors.spotify,
      }}
      onPress={handleGoToSpotify}
    >
      <View row spread top>
        <View row width="70%">
          <Image
            source={{ uri: albumCover.url }}
            style={{
              width: 64,
              height: 64,
              borderTopLeftRadius: 12,
              borderBottomLeftRadius: 12,
            }}
          />

          <View marginL-12 paddingT-6>
            <Text color="white" title numberOfLines={1}>
              {name}
            </Text>
            <Text color="white">{artistName}</Text>
          </View>
        </View>

        <View padding-12>
          <Entypo name="spotify" color="white" size={BOTTOM_TAB_ICON_SIZE} />
        </View>
      </View>
    </Card>
  );
}
