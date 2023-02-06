import { Card, View, Colors, Image, Text } from "react-native-ui-lib";
import Entypo from "@expo/vector-icons/Entypo";

import { PlaybackStateType } from "../../../../hooks/useSpotify";
import { BOTTOM_TAB_ICON_SIZE } from "../../../../config/constants";

export default function SpotifyCard(data: PlaybackStateType) {
  const {
    item: {
      name,
      album: { artists, images },
    },
  } = data;

  const [{ name: artistName }] = artists;
  const [, albumCover] = images;

  return (
    <Card
      style={{
        backgroundColor: Colors.spotify,
      }}
    >
      <View row spread top>
        <View row width="70%">
          <Image
            source={albumCover}
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
