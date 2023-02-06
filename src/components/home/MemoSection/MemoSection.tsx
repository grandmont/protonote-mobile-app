import { useNavigation } from "@react-navigation/native";
import { Card, View, Text } from "react-native-ui-lib";

import Divider from "../../elements/Divider/Divider";
import { Proto } from "../../../graphql/generated";
import ScreenSection from "../../layout/ScreenSection";

interface TodaySectionProps extends Partial<Proto> {}

export default function TodaySection({
  title,
  description,
  dateString,
}: TodaySectionProps) {
  const navigation = useNavigation();

  const handleGoToMemo = () => {
    navigation.navigate("Memo" as any, { date: { dateString } });
  };

  return (
    <ScreenSection title="Today's Memo">
      <Card padding-16 paddingT-12 onPress={handleGoToMemo}>
        <View row spread centerV>
          <Text text80M>{title}</Text>
        </View>
        <Divider size="tiny" showDividerLine />
        <Text p>{description}</Text>
      </Card>
    </ScreenSection>
  );
}
