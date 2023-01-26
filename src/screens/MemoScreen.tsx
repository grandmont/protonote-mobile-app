import { Text } from "react-native-ui-lib";

import ScreenLayout from "../components/layout/ScreenLayout";

export default function MemoScreen({ route }) {
  const { date } = route.params;

  return (
    <ScreenLayout>{date && <Text>{JSON.stringify(date)}</Text>}</ScreenLayout>
  );
}
