import { Card, Text } from "react-native-ui-lib";

export default function MemoCard({ title }) {
  return (
    <Card paddingH-20 paddingV-18>
      <Text p>{title}</Text>
    </Card>
  );
}
