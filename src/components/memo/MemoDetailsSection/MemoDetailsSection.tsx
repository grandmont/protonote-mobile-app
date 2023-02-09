import { useNavigation } from "@react-navigation/native";
import { Card, View, Text, Button } from "react-native-ui-lib";
import Ionicons from "@expo/vector-icons/Ionicons";

import Divider from "../../elements/Divider/Divider";
import { BOTTOM_TAB_ICON_SIZE } from "../../../config/constants";
import { Proto } from "../../../graphql/generated";
import ScreenSection from "../../layout/ScreenSection";
import { ScrollView } from "react-native";

interface MemoDetailsSectionProps extends Partial<Proto> {}

export default function MemoDetailsSection({
  description,
}: MemoDetailsSectionProps) {
  return (
    <ScreenSection title="Description">
      <ScrollView>
        <Text p>{description}</Text>
        <Divider size="huge" />
      </ScrollView>
    </ScreenSection>
  );
}
