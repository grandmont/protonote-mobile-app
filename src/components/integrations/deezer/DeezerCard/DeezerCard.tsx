import { Linking } from "react-native";
import { View, Image, Text, Button } from "react-native-ui-lib";

interface DeezerCardProps extends DeezerItemType {
  mode?: "default" | "light";
}

export default function DeezerCard(props: DeezerCardProps) {
  const {
    title,
    link,
    artist: { name: artistName },
    album: { title: albumTitle, cover },
    mode = "default",
  } = props;

  const isDefault = mode === "default";

  const handleOpenExternalUrl = async () => {
    const supported = await Linking.canOpenURL(link);

    if (supported) {
      await Linking.openURL(link);
    }
  };

  const backgroundColor = isDefault ? "black" : "white";

  const textColor = isDefault ? "white" : "black";

  return (
    <Button onPress={handleOpenExternalUrl} link>
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
              source={{ uri: cover }}
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
                {title}
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
                {albumTitle}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </Button>
  );
}
