import { View } from "react-native-ui-lib";

// Layout
import ScreenLayout from "../components/layout/ScreenLayout";

// Components
import Greetings from "../components/home/Greetings/Greetings";
import RecentActivity from "../components/home/RecentActivity/RecentActivity";
import MemoSection from "../components/home/MemoSection/MemoSection";

export default function HomeScreen() {
  return (
    <ScreenLayout>
      <Greetings />
      {/* [TODO]: Create Divider component later */}
      <View marginT-36 />
      <RecentActivity />
      <MemoSection />
    </ScreenLayout>
  );
}
