import { Text, View } from "react-native-ui-lib";
import { useQuery } from "@apollo/client";

import ScreenLayout from "../components/layout/ScreenLayout";
import Header from "../components/elements/Header/Header";
import SpotifyIntegration from "../components/integrations/spotify/SpotifyIntegration/SpotifyIntegration";
import useAuth from "../hooks/useAuth";
import { IntegrationsDocument } from "../graphql/generated";
import { useNavigation } from "@react-navigation/native";
import useIntegrations from "../hooks/useIntegrations";

export default function IntegrationsScreen() {
  const title = "Integrations";

  const navigation = useNavigation();

  // We need to set the integration type in the API, so we can hide the integration buttons if a integration exists
  const { integrations, hasIntegrations } = useIntegrations();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <ScreenLayout>
      <Header title={title} canGoBack />

      {integrations.map((integration) => (
        <View key={integration.id}>
          <Text>
            {integration.id}
            {integration.externalId}
          </Text>
        </View>
      ))}

      <SpotifyIntegration onSuccess={handleGoBack} />

      {/* {!hasIntegrations ? (
        <>
          <View flex center>
            <Text title marginB-12>
              There are no connected apps
            </Text>
            <Text
              center
            >{`Connect your favorite socials and\nboost your memos!`}</Text>
          </View>

          <SpotifyIntegration onSuccess={handleGoBack} />
        </>
      ) : (
        integrations.map((integration) => (
          <View key={integration.id}>
            <Text>{integration.id}</Text>
          </View>
        ))
      )} */}
    </ScreenLayout>
  );
}
