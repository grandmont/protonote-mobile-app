import { useNavigation } from "@react-navigation/native";
import { View, Button } from "react-native-ui-lib";

import ScreenLayout from "../components/layout/ScreenLayout";
import Header from "../components/elements/Header/Header";
import ScreenSection from "../components/layout/ScreenSection";
import useAuth from "../hooks/useAuth";
import SettingsItem from "../components/elements/SettingsItem/SettingsItem";

export default function SettingsScreen() {
  const title = "Settings";

  const navigation = useNavigation();
  const { logout } = useAuth();

  const navigateTo = (screen: string) => () => {
    navigation.navigate(screen as any);
  };

  return (
    <ScreenLayout dividerSize="regular">
      <Header title={title} canGoBack />

      {/* <ScreenSection title="Account">
        <SettingsItem title="Notifications" />
        <SettingsItem title="Appearance" marginT-12 />
        <SettingsItem title="Language" marginT-12 />
      </ScreenSection>

      <Divider size="small" /> */}

      <ScreenSection title="General">
        <SettingsItem title="Account" onPress={navigateTo("Account")} />
        <SettingsItem
          title="Connected apps"
          onPress={navigateTo("Integrations")}
          marginT-12
        />
        <SettingsItem
          title="About us"
          onPress={navigateTo("AboutUs")}
          marginT-12
        />
      </ScreenSection>

      <View flex bottom centerH>
        <Button label="Logout" link onPress={logout} />
      </View>
    </ScreenLayout>
  );
}
