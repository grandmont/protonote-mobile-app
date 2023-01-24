import { View, Text } from "react-native-ui-lib";

// import MemoCard from "../../elements/MemoCard/MemoCard";
import ScreenSection from "../../layout/ScreenSection";

export default function RecentActivity() {
  return (
    <View>
      <ScreenSection title="Recent activity">
        <View marginV-24 center>
          <Text p>There are no recent activities</Text>
        </View>
      </ScreenSection>
    </View>
  );
}
