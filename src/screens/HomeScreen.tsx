import { LoaderScreen } from "react-native-ui-lib";
import { useQuery } from "@apollo/client";

// Layout
import ScreenLayout from "../components/layout/ScreenLayout";

// Components
import Greetings from "../components/home/Greetings/Greetings";
import Divider from "../components/elements/Divider/Divider";
// import RecentActivity from "../components/home/RecentActivity/RecentActivity";
import MemoSection from "../components/home/MemoSection/MemoSection";
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

  console.log(getToday);

  if (loading) {
    return <LoaderScreen />;
  }

  return (
    <ScreenLayout>
      <Greetings />
      {/* <Divider />
      <RecentActivity /> */}
      {!getToday && <MemoSection />}
      {getToday && (
        <>
          <Divider />
          <TodaySection data={getToday} />
        </>
      )}
    </ScreenLayout>
  );
}
