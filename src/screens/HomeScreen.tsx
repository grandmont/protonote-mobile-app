import { LoaderScreen } from "react-native-ui-lib";
import { useQuery } from "@apollo/client";

// Layout
import ScreenLayout from "../components/layout/ScreenLayout";

// Components
import Greetings from "../components/home/Greetings/Greetings";
import RecentActivity from "../components/home/RecentActivity/RecentActivity";
import NoMemoSection from "../components/home/NoMemoSection/NoMemoSection";
import MemoSection from "../components/home/MemoSection/MemoSection";
import { GetMemoByDateStringDocument } from "../graphql/generated";
import { getTodayDateString } from "../utils/parsers";

export default function HomeScreen() {
  const todayDateString = getTodayDateString();

  const { data, loading } = useQuery(GetMemoByDateStringDocument, {
    variables: {
      dateString: todayDateString,
    },
  });

  const getToday = data?.getMemoByDateString;

  if (loading) return <LoaderScreen overlay />;

  return (
    <ScreenLayout>
      <Greetings />

      <RecentActivity />

      {!getToday ? <NoMemoSection /> : <MemoSection {...getToday} />}
    </ScreenLayout>
  );
}
