import { useNavigation } from "@react-navigation/native";
import { View, Button } from "react-native-ui-lib";

import ScreenLayout from "@components/layout/ScreenLayout";
import Header from "@components/elements/Header/Header";
import ScreenSection from "@components/layout/ScreenSection";
import useAuth from "@hooks/useAuth";
import SettingsItem from "@components/elements/SettingsItem/SettingsItem";
import i18n from "@i18n";

export default function SettingsScreen() {
  const title = i18n.t("settings.title");

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

      <ScreenSection title={i18n.t("settings.general.sectionTitle")}>
        <SettingsItem
          title={i18n.t("settings.general.account")}
          onPress={navigateTo("Account")}
        />
        <SettingsItem
          title={i18n.t("settings.general.connectedApps")}
          onPress={navigateTo("Integrations")}
          marginT-12
        />
        <SettingsItem
          title={i18n.t("settings.general.aboutUs")}
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
