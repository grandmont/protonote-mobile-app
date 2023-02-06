import { useState } from "react";

import useInterval from "../../../hooks/useInterval";
import useIntegrations from "../../../hooks/useIntegrations";
import useSpotify, { PlaybackStateType } from "../../../hooks/useSpotify";
import Divider from "../../elements/Divider/Divider";
import SpotifyCard from "../../integrations/spotify/SpotifyCard/SpotifyCard";
import ScreenSection from "../../layout/ScreenSection";

const SPOTIFY_REQUEST_INTERVAL = 2000;

export default function RecentActivity() {
  const [playbackState, setPlaybackState] = useState<PlaybackStateType | null>(
    null
  );
  const { hasIntegrations } = useIntegrations();
  const { getPlaybackState } = useSpotify();

  useInterval(async () => {
    const data = await getPlaybackState();

    console.log(data);
    if (!data) return;

    setPlaybackState(data);
  }, SPOTIFY_REQUEST_INTERVAL);

  const hasRecentActivity = hasIntegrations && !!playbackState;

  if (!hasRecentActivity) return null;

  return (
    <ScreenSection title="Recent activity">
      {playbackState && <SpotifyCard {...playbackState} />}

      <Divider size="tiny" />
    </ScreenSection>
  );
}
