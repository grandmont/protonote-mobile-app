import { useEffect } from "react";
import { Card, Text } from "react-native-ui-lib";

import useSpotify from "../../../hooks/useSpotify";
import Divider from "../../elements/Divider/Divider";
import SpotifyCard from "../../integrations/spotify/SpotifyCard/SpotifyCard";
import ScreenSection from "../../layout/ScreenSection";

export default function RecentActivity() {
  const { playbackState, fetchPlaybackState } = useSpotify();

  // Mount
  useEffect(() => {
    console.log("this runs once");
    fetchPlaybackState();
  }, []);

  return (
    <ScreenSection title="Recent activity">
      {!playbackState && (
        <Card height={64} padding-16 center>
          <Text>There is no recent activity</Text>
        </Card>
      )}

      {playbackState && <SpotifyCard {...playbackState} />}

      <Divider size="tiny" />
    </ScreenSection>
  );
}
