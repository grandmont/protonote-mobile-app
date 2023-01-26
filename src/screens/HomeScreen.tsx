// Layout
import ScreenLayout from "../components/layout/ScreenLayout";

// Components
import Greetings from "../components/home/Greetings/Greetings";
import RecentActivity from "../components/home/RecentActivity/RecentActivity";
import MemoSection from "../components/home/MemoSection/MemoSection";
import Divider from "../components/elements/Divider/Divider";

export default function HomeScreen() {
  return (
    <ScreenLayout>
      <Greetings />
      <Divider />
      <RecentActivity />
      <MemoSection />
    </ScreenLayout>
  );
}
