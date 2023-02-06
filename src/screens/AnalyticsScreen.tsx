import { Button, View } from "react-native-ui-lib";
import Ionicons from "@expo/vector-icons/Ionicons";

import Divider from "../components/elements/Divider/Divider";
import Fade from "../components/elements/Fade/Fade";
import Header from "../components/elements/Header/Header";
import ScreenLayout from "../components/layout/ScreenLayout";
import UsageInformation from "../components/analytics/UsageInformation/UsageInformation";
import ChartsSection from "../components/analytics/ChartsSection/ChartsSection";
import ActivitiesSection from "../components/analytics/ActivitiesSection/ActivitiesSection";
import { BOTTOM_TAB_ICON_SIZE } from "../config/constants";

export default function AnalyticsScreen() {
  return (
    <ScreenLayout divider={false}>
      <View row spread top>
        <Header
          title="Usage report"
          description="Get to know more about your memos"
        />

        {/* <View row top centerV>
          <Button onPress={() => null} hitSlop={5} padding-4 link>
            <Ionicons name="md-share-outline" size={BOTTOM_TAB_ICON_SIZE} />
          </Button>
        </View> */}
      </View>

      <UsageInformation />
      <Divider size="tiny" />

      <ActivitiesSection />
      <Divider size="tiny" />

      <ChartsSection />
      <Fade bottom />
    </ScreenLayout>
  );
}
