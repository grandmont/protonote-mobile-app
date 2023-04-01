import { Linking } from "react-native";
import { View, Colors, Image, Text, Button } from "react-native-ui-lib";

import { SpotifyItem } from "@graphql/generated";

interface SpotifyCardProps extends SpotifyItem {
  mode?: "default" | "light";
}

export default function SpotifyCard(props: SpotifyCardProps) {
  const {
    name,
    album: { artists, images },
    external_urls: { spotify },
    mode = "default",
  } = props;

  const isDefault = mode === "default";

  const [{ name: artistName }] = artists;
  const [, albumCover] = images;

  const handleGoToSpotify = async () => {
    const supported = await Linking.canOpenURL(spotify);

    if (supported) {
      await Linking.openURL(spotify);
    }
  };

  const backgroundColor = isDefault ? Colors.spotify : "white";

  const textColor = isDefault ? "white" : "black";

  const cardBorderRadius = isDefault ? 12 : 0;

  const borderRadius = isDefault && {
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  };

  return (
    <Button onPress={handleGoToSpotify} link>
      <View
        height={64}
        flex
        style={{
          backgroundColor,
          borderRadius: cardBorderRadius,
        }}
      >
        <View row spread top>
          <View row width="70%">
            <Image
              source={{ uri: albumCover.url }}
              style={{
                width: 64,
                height: 64,
                ...borderRadius,
              }}
            />

            <View marginL-12 paddingT-6>
              <Text color={textColor} title numberOfLines={1}>
                {name}
              </Text>
              <Text color={textColor}>{artistName}</Text>
            </View>
          </View>
        </View>
      </View>
    </Button>
  );
}
