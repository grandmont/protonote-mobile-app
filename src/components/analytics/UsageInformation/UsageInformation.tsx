import { View, Card, Text } from "react-native-ui-lib";
import Ionicons from "@expo/vector-icons/Ionicons";

import ScreenSection from "../../layout/ScreenSection";
import { BOTTOM_TAB_ICON_SIZE } from "../../../config/constants";

export default function UsageInformation() {
  return (
    <ScreenSection title="Memos">
      <View row spread>
        <Card flex padding-16 marginR-12>
          <View row centerV>
            <Ionicons
              name="md-albums"
              color="blue"
              size={BOTTOM_TAB_ICON_SIZE}
            />
            <Text h2 marginL-6>
              12
            </Text>
          </View>
          <Text text80M>memos</Text>
        </Card>

        <Card flex padding-16>
          <View row centerV>
            <Ionicons name="md-flame" color="red" size={BOTTOM_TAB_ICON_SIZE} />
            <Text h2 marginL-6>
              7
            </Text>
          </View>
          <Text text80M>day streak</Text>
        </Card>
      </View>

      {/* <View row spread marginT-12>
        <Card flex padding-16 marginR-12>
          <View row centerV>
            <Ionicons
              name="md-bulb"
              color="green"
              size={BOTTOM_TAB_ICON_SIZE}
            />
            <Text h2 marginL-6>
              0
            </Text>
          </View>
          <Text text80M>connected apps</Text>
        </Card>

        <Card flex padding-16>
          <View row centerV>
            <Ionicons
              name="md-heart"
              color="gold"
              size={BOTTOM_TAB_ICON_SIZE}
            />
            <Text h2 marginL-6>
              2
            </Text>
          </View>
          <Text text80M>contacts</Text>
        </Card>
      </View> */}
    </ScreenSection>
  );
}
