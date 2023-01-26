import { View, Text, Avatar } from "react-native-ui-lib";
import useAuth from "../../../hooks/useAuth";

export default function Greetings() {
  const { userInfo, logout } = useAuth();

  console.log("userInfo:", userInfo);

  const handleAvatarPress = () => {
    console.log("logging out");
    logout();
  };

  return (
    <View row spread>
      <View>
        <Text h2>Hey, {userInfo?.name}</Text>
        <Text sub>Good morning</Text>
      </View>

      <View>
        <Avatar
          onPress={handleAvatarPress}
          size={36}
          source={{
            uri: userInfo?.picture,
          }}
        />
      </View>
    </View>
  );
}
