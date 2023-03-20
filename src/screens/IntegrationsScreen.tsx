import { useState } from "react";
import { Incubator } from "react-native-ui-lib";
const { Toast } = Incubator;

import useIntegrations from "@hooks/useIntegrations";
import ScreenLayout from "@components/layout/ScreenLayout";
import Header from "@components/elements/Header/Header";
import SpotifyIntegration from "@components/integrations/spotify/SpotifyIntegration/SpotifyIntegration";

export default function IntegrationsScreen() {
  const title = "Integrations";

  const [isToastVisible, setIsToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const { integrations } = useIntegrations();

  const handleSpotifySuccess = () => {
    setToastMessage("Spotify successfully connected!");
    setIsToastVisible(true);
  };

  const { spotifyIntegration } = integrations;

  return (
    <ScreenLayout>
      <Header title={title} canGoBack />

      <SpotifyIntegration
        hasSpotify={!!spotifyIntegration}
        onSuccess={handleSpotifySuccess}
      />

      <Toast
        visible={isToastVisible}
        message={toastMessage}
        onDismiss={() => setIsToastVisible(false)}
        position="top"
        preset="success"
        autoDismiss={2000}
        centerMessage
        swipeable
      />
    </ScreenLayout>
  );
}
