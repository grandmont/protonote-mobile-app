import { useNavigation } from "@react-navigation/native";
import { View, Button, Card, Text } from "react-native-ui-lib";

import ScreenLayout from "../components/layout/ScreenLayout";
import Header from "../components/elements/Header/Header";
import ScreenSection from "../components/layout/ScreenSection";
import Divider from "../components/elements/Divider/Divider";
import useAuth from "../hooks/useAuth";

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
        <Card padding-16 paddingV-24>
          <Text>Notifications</Text>
        </Card>

        <Card padding-16 paddingV-24 marginT-12>
          <Text>Appearance</Text>
        </Card>

        <Card padding-16 paddingV-24 marginT-12>
          <Text>Language</Text>
        </Card>
      </ScreenSection>

      <Divider size="small" />
      <ScreenSection title="General">
        <Card padding-16 paddingV-24 onPress={handleGoToIntegrations}>
          <Text>Manage Third-party Integrations</Text>
        </Card>

        <Card padding-16 paddingV-24 marginT-12>
          <Text>About us</Text>
        </Card>
      </ScreenSection>

      <View flex bottom centerH>
        <Button label="Logout" link onPress={logout} />
      </View>
    </ScreenLayout>
  );
}
