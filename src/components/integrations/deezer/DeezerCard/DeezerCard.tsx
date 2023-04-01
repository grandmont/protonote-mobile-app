import { Linking } from "react-native";
import { View, Image, Text, Button } from "react-native-ui-lib";

interface DeezerCardProps extends DeezerItemType {
  mode?: "default" | "light";
}

export default function DeezerCard(props: DeezerCardProps) {
  const {
    id,
    title,
    link,
    artist: { name: artistName },
    album: { cover },
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

  const cardBorderRadius = isDefault ? 12 : 0;

  const borderRadius = isDefault && {
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  };

  return (
    <Button onPress={handleOpenExternalUrl} link>
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
              source={{ uri: cover }}
              style={{
                width: 64,
                height: 64,
                ...borderRadius,
              }}
            />

            <View marginL-12 paddingT-6>
              <Text color={textColor} title numberOfLines={1}>
                {title}
              </Text>
              <Text color={textColor}>{artistName}</Text>
            </View>
          </View>
        </View>
      </View>
    </Button>
  );
}
