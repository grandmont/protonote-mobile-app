import { useState } from "react";
import { Incubator, LoaderScreen } from "react-native-ui-lib";
const { Toast } = Incubator;

import useIntegrations from "@hooks/useIntegrations";
import ScreenLayout from "@components/layout/ScreenLayout";
import Header from "@components/elements/Header/Header";
import SpotifyIntegration from "@components/integrations/spotify/SpotifyIntegration/SpotifyIntegration";
import DeezerIntegration from "@components/integrations/deezer/DeezerIntegration/DeezerIntegration";
import { IntegrationProvider } from "@graphql/generated";
import YouTubeIntegration from "@components/integrations/youtube/YouTubeIntegration/YouTubeIntegration";

export default function IntegrationsScreen() {
  const title = "Integrations";

  const [isLoading, setIsLoading] = useState(false);
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const { integrations } = useIntegrations();

  const handleStart = () => {
    setIsLoading(true);
  };

  const handleCancel = () => {
    setIsLoading(false);
  };

  const handleSuccess = (provider: IntegrationProvider) => {
    const message = {
      [IntegrationProvider.Spotify]: "Spotify",
      [IntegrationProvider.Deezer]: "Deezer",
    }[provider];

    setToastMessage(`${message} successfully connected!`);
    setIsToastVisible(true);
    setIsLoading(false);
  };

  const { spotifyIntegration, deezerIntegration } = integrations;

  return (
    <ScreenLayout>
      <Header title={title} canGoBack />

      <SpotifyIntegration
        hasIntegration={!!spotifyIntegration}
        onSuccess={() => handleSuccess(IntegrationProvider.Spotify)}
        onStart={handleStart}
        onCancel={handleCancel}
      />

      <DeezerIntegration
        hasIntegration={!!deezerIntegration}
        onSuccess={() => handleSuccess(IntegrationProvider.Deezer)}
        onStart={handleStart}
        onCancel={handleCancel}
      />

      <YouTubeIntegration
        hasIntegration={false}
        onSuccess={() => null}
        onStart={handleStart}
        onCancel={handleCancel}
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

      {isLoading && <LoaderScreen overlay />}
    </ScreenLayout>
  );
}
