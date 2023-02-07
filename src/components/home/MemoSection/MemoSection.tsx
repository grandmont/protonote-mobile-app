import { useNavigation } from "@react-navigation/native";
import { Card, View, Text, Button } from "react-native-ui-lib";

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
      <Card>
        <Button link onPress={handleGoToMemo}>
          <View padding-16 paddingT-12 paddingB-0 row spread centerV>
            <Text text80M>{title}</Text>
          </View>
        </Button>
        <Divider size="tiny" showDividerLine />

        <View padding-16 paddingT-0>
          <Text numberOfLines={7} p>
            {description}
          </Text>
        </View>
      </Card>
    </ScreenSection>
  );
}
