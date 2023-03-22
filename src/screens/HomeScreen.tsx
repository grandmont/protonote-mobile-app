import { useCallback, useEffect } from "react";
import { LoaderScreen } from "react-native-ui-lib";

import useAuth from "@hooks/useAuth";
import useIntegrations from "@hooks/useIntegrations";
import useLocalQuery from "@hooks/useLocalQuery";
import useSpotify from "@hooks/useSpotify";
import ScreenLayout from "@components/layout/ScreenLayout";
import Greetings from "@components/home/Greetings/Greetings";
import MemoSection from "@components/home/MemoSection/MemoSection";
import { getTodayDateString } from "@utils/parsers";
import { useFocusEffect } from "@react-navigation/native";
import useAPISync from "@hooks/useAPISync";

export default function HomeScreen() {
  const todayDateString = getTodayDateString();

  const { integrations } = useIntegrations();

  const { userInfo } = useAuth();

  const { syncAPI } = useAPISync();

  const {
    data: [today],
    loading,
    refetch,
  } = useLocalQuery("proto");

  const { saveSpotifyTracks } = useSpotify();

  const syncData = async () => {
    const { spotifyIntegration } = integrations;

    if (!!spotifyIntegration) {
      await saveSpotifyTracks();
    }

    await syncAPI({ id: userInfo?.id });
  };

  useEffect(() => {
    syncData();
  }, []);

  // Need to move this to reuse the logic
  useFocusEffect(
    useCallback(() => {
      refetch({
        where: {
          dateString: todayDateString,
        },
      });
    }, [])
  );

  return (
    <ScreenLayout>
      <Greetings />

      {!loading && <MemoSection {...today} />}

      {loading && <LoaderScreen overlay />}
    </ScreenLayout>
  );
}
