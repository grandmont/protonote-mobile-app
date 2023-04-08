import { Linking } from "react-native";
import { View, Image, Text, Button } from "react-native-ui-lib";
import ImageColors from "react-native-image-colors";

import { SpotifyItem } from "@graphql/generated";
import { useEffect, useState } from "react";

interface SpotifyCardProps extends SpotifyItem {
  mode?: "default" | "light";
}

export default function SpotifyCard(props: SpotifyCardProps) {
  const {
    id,
    name,
    album: { name: albumName, artists, images },
    external_urls: { spotify },
    mode = "default",
  } = props as any;

  const [backgroundColor, setBackgroundColor] = useState("white");

  const isDefault = mode === "default";

  const [{ name: artistName }] = artists;
  const [, albumCover] = images;

  const uri = albumCover.url;

  const textColor = isDefault ? "white" : "black";

  const handleGoToSpotify = async () => {
    const supported = await Linking.canOpenURL(spotify);

    if (supported) {
      await Linking.openURL(spotify);
    }
  };

  const getBackgroundColor = async () => {
    if (!isDefault) return;

    const result = await ImageColors.getColors(uri, {
      fallback: "#191414",
      cache: true,
      key: id,
    });

    if (result.platform === "android") {
      return setBackgroundColor(result.vibrant);
    }

    if (result.platform === "ios") {
      return setBackgroundColor(result.primary);
    }
  };

  useEffect(() => {
    getBackgroundColor();
  }, []);

  return (
    <Button onPress={handleGoToSpotify} link>
      <View
        height={70}
        flex
        style={{
          backgroundColor,
        }}
      >
        <View row spread top>
          <View row width="70%">
            <Image
              source={{ uri }}
              style={{
                width: 70,
                height: 70,
              }}
            />

            <View marginL-12 paddingT-4>
              <Text
                color={textColor}
                title
                style={{ lineHeight: 24 }}
                numberOfLines={1}
              >
                {name}
              </Text>
              <Text
                color={textColor}
                style={{ fontSize: 12, lineHeight: 16 }}
                numberOfLines={1}
              >
                {artistName}
              </Text>
              <Text
                color={textColor}
                style={{ fontSize: 12, lineHeight: 16 }}
                numberOfLines={1}
              >
                {albumName}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </Button>
  );
}
