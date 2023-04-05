import { useCallback } from "react";
import { LoaderScreen } from "react-native-ui-lib";
import { useFocusEffect } from "@react-navigation/native";

import useAuth from "@hooks/useAuth";
import useAPISync from "@hooks/useAPISync";
import useLocalQuery from "@hooks/useLocalQuery";
import ScreenLayout from "@components/layout/ScreenLayout";
import Greetings from "@components/home/Greetings/Greetings";
import MemoSection from "@components/home/MemoSection/MemoSection";
import { getTodayDateString } from "@utils/parsers";
// import AdBanner from "@components/home/AdBanner/AdBanner";

export default function HomeScreen() {
  const todayDateString = getTodayDateString();

  const { userInfo } = useAuth();

  const { syncAPI } = useAPISync();

  const {
    data: [today],
    loading,
    refetch,
  } = useLocalQuery("proto");

  // Need to move this to reuse the logic
  useFocusEffect(
    useCallback(() => {
      userInfo?.id && syncAPI({ userId: userInfo.id });

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

      {/* <AdBanner /> */}

      {!loading && <MemoSection {...today} />}

      {loading && <LoaderScreen overlay />}
    </ScreenLayout>
  );
}
