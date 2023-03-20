import { useNavigation } from "@react-navigation/native";
import { Card, View, Text, Button } from "react-native-ui-lib";

import Divider from "@components/elements/Divider/Divider";
import ScreenSection from "@components/layout/ScreenSection";
import NoMemoSection from "@components/home/NoMemoSection/NoMemoSection";
import { Proto } from "@graphql/generated";

interface TodaySectionProps extends Partial<Proto> {}

export default function TodaySection({
  id,
  title,
  description,
  dateString,
}: TodaySectionProps) {
  const navigation = useNavigation();

  const handleGoToMemo = () => {
    navigation.navigate("Memo", { date: { dateString } });
  };

  const editData = {
    id,
    description,
  };

  return (
    <>
      {!description ? (
        <NoMemoSection editData={editData} />
      ) : (
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
      )}
    </>
  );
}
