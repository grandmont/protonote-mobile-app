import { View, Text } from "react-native-ui-lib";

import Divider from "../Divider/Divider";

interface HeaderProps {
  title: string;
  description?: string;
}

export default function Header({ title, description }: HeaderProps) {
  return (
    <View>
      <Text h2>{title}</Text>
      {description && <Text p>{description}</Text>}
      <Divider size="small" />
    </View>
  );
}
