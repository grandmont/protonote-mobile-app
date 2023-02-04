import { View, Text, Button } from "react-native-ui-lib";
import Ionicons from "@expo/vector-icons/Ionicons";

import Divider from "../Divider/Divider";
import { BOTTOM_TAB_ICON_SIZE } from "../../../config/constants";
import { useNavigation } from "@react-navigation/native";

interface HeaderProps {
  title: string;
  description?: string;
  canGoBack?: boolean;
}

export default function Header({
  title,
  description,
  canGoBack = false,
}: HeaderProps) {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View>
      {canGoBack && (
        <Button
          onPress={handleGoBack}
          style={{ position: "absolute", top: 3, left: -6, zIndex: 1 }}
          hitSlop={12}
          link
        >
          <Ionicons
            name="md-chevron-back"
            color="blue"
            size={BOTTOM_TAB_ICON_SIZE}
          />
        </Button>
      )}

      <Text h2 center={canGoBack}>
        {title}
      </Text>
      {description && <Text p>{description}</Text>}
      <Divider size="small" />
    </View>
  );
}
