import { Button, Card, Colors, Text } from "react-native-ui-lib";
import Entypo from "@expo/vector-icons/Entypo";

export default function SpotifyButton({ disabled, onPress }) {
  return (
    <Button disabled={disabled} link onPress={onPress}>
      <Card
        row
        center
        padding-6
        borderRadius={100}
        style={{ backgroundColor: Colors.spotify }}
      >
        <Text title marginH-12 color="white">
          Connect Spotify
        </Text>
        <Entypo name="spotify" color="white" size={36} />
      </Card>
    </Button>
  );
}
