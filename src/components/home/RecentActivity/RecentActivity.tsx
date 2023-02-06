import { useEffect } from "react";
import { Card, Text } from "react-native-ui-lib";

import useIntegrations from "../../../hooks/useIntegrations";
import useSpotify from "../../../hooks/useSpotify";
import Divider from "../../elements/Divider/Divider";
import SpotifyCard from "../../integrations/spotify/SpotifyCard/SpotifyCard";
import ScreenSection from "../../layout/ScreenSection";

export default function RecentActivity() {
  // const { hasIntegrations } = useIntegrations();
  const { playbackState, fetchPlaybackState } = useSpotify();

  // const hasRecentActivity = hasIntegrations && !!playbackState;

  // Mount
  useEffect(() => {
    console.log("this runs once");
    fetchPlaybackState();
  }, []);

  // if (!hasRecentActivity) return null;

  return (
    <ScreenSection title="Recent activity">
      {!playbackState && (
        <Card padding-16>
          <Text>There is no recent activity</Text>
        </Card>
      )}
      {playbackState && <SpotifyCard {...playbackState} />}

      <Divider size="tiny" />
    </ScreenSection>
  );
}
