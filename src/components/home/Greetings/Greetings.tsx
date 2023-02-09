import { View, Avatar, Button } from "react-native-ui-lib";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

import useAuth from "../../../hooks/useAuth";
import Header from "../../elements/Header/Header";
import { getTimeRangeGreetings } from "../../../utils/parsers";
import { BOTTOM_TAB_ICON_SIZE } from "../../../config/constants";

export default function Greetings() {
  const navigation = useNavigation();
  const { userInfo } = useAuth();

  const handleNotificationsPress = () => {
    navigation.navigate("Notifications" as any);
  };

  const handleSettingsPress = () => {
    navigation.navigate("Settings" as any);
  };

  const title = `Hey, ${userInfo?.name}!`;
  const description = `Good ${getTimeRangeGreetings()}`;

  return (
    <View row spread top>
      <Header title={title} description={description} />

      <View row top centerV>
        <Button
          onPress={handleNotificationsPress}
          hitSlop={{ top: 10, bottom: 10, left: 4, right: 4 }}
          marginR-12
          padding-4
          link
          style={{ zIndex: 1 }}
        >
          <Ionicons name="notifications-outline" size={BOTTOM_TAB_ICON_SIZE} />
        </Button>
        <Button
          onPress={handleSettingsPress}
          hitSlop={{ top: 10, bottom: 10, left: 4, right: 4 }}
          marginR-16
          padding-4
          link
          style={{ zIndex: 1 }}
        >
          <Ionicons name="settings-outline" size={BOTTOM_TAB_ICON_SIZE} />
        </Button>

        <Avatar
          size={36}
          source={{
            uri: userInfo?.picture,
          }}
        />
      </View>
    </View>
  );
}
