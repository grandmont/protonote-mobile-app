import { View, Text, Avatar, Button } from "react-native-ui-lib";
import Ionicons from "@expo/vector-icons/Ionicons";

import useAuth from "../../../hooks/useAuth";
import Header from "../../elements/Header/Header";
import { getTimeRangeGreetings } from "../../../utils/parsers";
import { BOTTOM_TAB_ICON_SIZE } from "../../../config/constants";

export default function Greetings() {
  const { userInfo, logout } = useAuth();

  const handleAvatarPress = () => {
    logout();
  };

  const title = `Hey, ${userInfo?.name}!`;
  const description = `Good ${getTimeRangeGreetings()}`;

  return (
    <View row spread top>
      {/* <View>
        <Text h2>Hey, {userInfo?.name}!</Text>
        <Text p>Good {getTimeRangeGreetings()}</Text>
      </View> */}

      <Header title={title} description={description} />

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
