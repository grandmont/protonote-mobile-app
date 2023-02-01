import { View, Text, Avatar, Button } from "react-native-ui-lib";
import Ionicons from "@expo/vector-icons/Ionicons";

import useAuth from "../../../hooks/useAuth";
import { BOTTOM_TAB_ICON_SIZE } from "../../../config/constants";

import { getTimeRangeGreetings } from "../../../utils/parsers";

export default function Greetings() {
  const { userInfo, logout } = useAuth();

  const handleAvatarPress = () => {
    logout();
  };

  return (
    <View row spread top>
      <View>
        <Text h2>Hey, {userInfo?.name}!</Text>
        <Text p>Good {getTimeRangeGreetings()}</Text>
      </View>

      <View row top centerV>
        <Button marginR-12 padding-4 link>
          <Ionicons name="notifications-outline" size={BOTTOM_TAB_ICON_SIZE} />
        </Button>
        <Button marginR-12 padding-4 link>
          <Ionicons name="settings-outline" size={BOTTOM_TAB_ICON_SIZE} />
        </Button>
        <Button marginL-4 link onPress={handleAvatarPress}>
          <Avatar
            size={36}
            source={{
              uri: userInfo?.picture,
            }}
          />
        </Button>
      </View>
    </View>
  );
}
