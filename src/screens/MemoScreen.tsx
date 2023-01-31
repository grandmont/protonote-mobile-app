import { Text } from "react-native-ui-lib";

import ScreenLayout from "../components/layout/ScreenLayout";

export default function MemoScreen({ route }) {
  if (!route.params) return null;

  const { date } = route.params;

  return <ScreenLayout>{date && <Text>{date.dateString}</Text>}</ScreenLayout>;
}
