import { LoaderScreen } from "react-native-ui-lib";
import { useQuery } from "@apollo/client";

// Layout
import ScreenLayout from "../components/layout/ScreenLayout";

// Components
import Greetings from "../components/home/Greetings/Greetings";
import NoMemoSection from "../components/home/NoMemoSection/NoMemoSection";
import TodaySection from "../components/home/TodaySection/TodaySection";
import { GetTodayDocument } from "../graphql/generated";
import { getTodayDateString } from "../utils/parsers";

export default function HomeScreen() {
  const todayDateString = getTodayDateString();

  const { data, loading } = useQuery(GetTodayDocument, {
    variables: {
      dateString: todayDateString,
    },
  });

  const getToday = data?.getToday;

  if (loading) return <LoaderScreen overlay />;

  return (
    <ScreenLayout>
      <Greetings />
      {!getToday && <NoMemoSection />}
      {getToday && <TodaySection data={getToday} />}
    </ScreenLayout>
  );
}
