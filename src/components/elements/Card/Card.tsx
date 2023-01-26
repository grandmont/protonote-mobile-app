import { Card as RNUICard, Text } from "react-native-ui-lib";

export default function Card({ title }) {
  return (
    <RNUICard paddingH-20 paddingV-18>
      <Text p>{title}</Text>
    </RNUICard>
  );
}
