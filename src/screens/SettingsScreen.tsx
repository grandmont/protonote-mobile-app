import { useNavigation } from "@react-navigation/native";
import { View, Button, Card, Text } from "react-native-ui-lib";
import Ionicons from "@expo/vector-icons/Ionicons";

import ScreenLayout from "../components/layout/ScreenLayout";
import Header from "../components/elements/Header/Header";
import ScreenSection from "../components/layout/ScreenSection";
import Divider from "../components/elements/Divider/Divider";
import useAuth from "../hooks/useAuth";
import { BOTTOM_TAB_ICON_SIZE } from "../config/constants";

const SettingsItem = ({ title, ...props }) => (
  <Card padding-16 paddingV-20 {...props}>
    <View row centerV spread>
      <Text>{title}</Text>
      <Ionicons
        name="md-chevron-forward"
        size={BOTTOM_TAB_ICON_SIZE}
        style={{ marginRight: -6 }}
      />
    </View>
  </Card>
);

export default function SettingsScreen() {
  const title = "Settings";

  const navigation = useNavigation();
  const { logout } = useAuth();

  const handleGoToIntegrations = () => {
    navigation.navigate("Integrations" as any);
  };

  return (
    <ScreenLayout dividerSize="regular">
      <Header title={title} canGoBack />

      <ScreenSection title="Personal">
        <SettingsItem title="Notifications" />
        <SettingsItem title="Appearance" marginT-12 />
        <SettingsItem title="Language" marginT-12 />
      </ScreenSection>

      <Divider size="small" />

      <ScreenSection title="General">
        <SettingsItem
          title="Manage Third-party Integrations"
          onPress={handleGoToIntegrations}
        />
        <SettingsItem title="About us" marginT-12 />
      </ScreenSection>

      <View flex bottom centerH>
        <Button label="Logout" link onPress={logout} />
      </View>
    </ScreenLayout>
  );
}
