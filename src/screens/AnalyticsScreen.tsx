import { View } from "react-native-ui-lib";

import Divider from "@components/elements/Divider/Divider";
import Fade from "@components/elements/Fade/Fade";
import Header from "@components/elements/Header/Header";
import ScreenLayout from "@components/layout/ScreenLayout";
import UsageInformation from "@components/analytics/UsageInformation/UsageInformation";
import ChartsSection from "@components/analytics/ChartsSection/ChartsSection";

export default function AnalyticsScreen() {
  return (
    <ScreenLayout divider={false}>
      <View row spread top>
        <Header
          title="Usage report"
          description="Get to know more about your memos"
        />
      </View>

      <UsageInformation />
      <Divider size="regular" />

      <ChartsSection />
      <Fade bottom />
    </ScreenLayout>
  );
}
