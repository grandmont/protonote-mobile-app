import { useEffect } from "react";
import { LoaderScreen } from "react-native-ui-lib";
import { useQuery } from "@apollo/client";

import useSpotify from "@hooks/useSpotify";
import useIntegrations from "@hooks/useIntegrations";
import ScreenLayout from "@components/layout/ScreenLayout";
import Greetings from "@components/home/Greetings/Greetings";
import MemoSection from "@components/home/MemoSection/MemoSection";
import { GetMemoByDateStringDocument } from "@graphql/generated";
import { getTodayDateString } from "@utils/parsers";

export default function HomeScreen() {
  const todayDateString = getTodayDateString();

  const { integrations } = useIntegrations();

  const { data, loading } = useQuery(GetMemoByDateStringDocument, {
    variables: {
      dateString: todayDateString,
    },
  });

  const getToday = data?.getMemoByDateString;

  const { saveSpotifyTracks } = useSpotify();

  useEffect(() => {
    const { spotifyIntegration } = integrations;

    const hasSpotify = !!spotifyIntegration;

    // Don't call spotify if there's no integration with the logged user
    hasSpotify && saveSpotifyTracks();
  }, []);

  return (
    <ScreenLayout>
      <Greetings />

      <MemoSection {...getToday} />

      {loading && <LoaderScreen overlay />}
    </ScreenLayout>
  );
}
