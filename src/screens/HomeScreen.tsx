import { LoaderScreen } from "react-native-ui-lib";
import { useQuery } from "@apollo/client";

// Layout
import ScreenLayout from "../components/layout/ScreenLayout";

// Components
import Greetings from "../components/home/Greetings/Greetings";
import NoMemoSection from "../components/home/NoMemoSection/NoMemoSection";
import MemoSection from "../components/home/MemoSection/MemoSection";
import { GetMemoByDateStringDocument } from "../graphql/generated";
import { getTodayDateString } from "../utils/parsers";
import useSpotify from "../hooks/useSpotify";
import { useEffect } from "react";

export default function HomeScreen() {
  const todayDateString = getTodayDateString();

  const { data, loading } = useQuery(GetMemoByDateStringDocument, {
    variables: {
      dateString: todayDateString,
    },
  });

  const getToday = data?.getMemoByDateString;

  const { saveSpotifyTracks } = useSpotify();

  useEffect(() => {
    saveSpotifyTracks();
  }, []);

  return (
    <ScreenLayout>
      <Greetings />

      {!getToday?.description ? (
        <NoMemoSection />
      ) : (
        <MemoSection {...getToday} />
      )}

      {loading && <LoaderScreen overlay />}
    </ScreenLayout>
  );
}
