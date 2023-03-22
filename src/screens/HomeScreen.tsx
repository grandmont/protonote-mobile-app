import { useCallback, useEffect } from "react";
import { LoaderScreen } from "react-native-ui-lib";

import useAuth from "@hooks/useAuth";
import useIntegrations from "@hooks/useIntegrations";
import useAPISync from "@hooks/useAPISync";
import useLocalQuery from "@hooks/useLocalQuery";
import useSpotify from "@hooks/useSpotify";
import ScreenLayout from "@components/layout/ScreenLayout";
import Greetings from "@components/home/Greetings/Greetings";
import MemoSection from "@components/home/MemoSection/MemoSection";
import { getTodayDateString } from "@utils/parsers";
import { useFocusEffect } from "@react-navigation/native";
import AdBanner from "@components/home/AdBanner/AdBanner";

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

  useEffect(() => {
    if (!userInfo?.id) return;

    const { spotifyIntegration } = integrations;

    if (!!spotifyIntegration) {
      console.log("save spotify");
      saveSpotifyTracks();
    }
  }, []);

  // Need to move this to reuse the logic
  useFocusEffect(
    useCallback(() => {
      syncAPI({ id: userInfo?.id });

      refetch({
        where: {
          dateString: todayDateString,
        },
      });
    }, [userInfo?.id])
  );

  return (
    <ScreenLayout>
      <Greetings />

      <AdBanner />

      {!loading && <MemoSection {...today} />}

      {loading && <LoaderScreen overlay />}
    </ScreenLayout>
  );
}
