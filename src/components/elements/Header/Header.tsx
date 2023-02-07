import { View, Text, Button, Colors } from "react-native-ui-lib";
import Ionicons from "@expo/vector-icons/Ionicons";

import Divider from "../Divider/Divider";
import { BOTTOM_TAB_ICON_SIZE } from "../../../config/constants";
import { useNavigation } from "@react-navigation/native";

interface HeaderProps {
  title: string;
  description?: string;
  canGoBack?: boolean;
  onEdit?: () => void;
}

export default function Header({
  title,
  description,
  canGoBack = false,
  onEdit = null,
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
          style={{ position: "absolute", top: 2, left: -6, zIndex: 1 }}
          hitSlop={12}
          link
        >
          <Ionicons name="md-chevron-back" color={Colors.primary} size={24} />
        </Button>
      )}

      {onEdit && (
        <Button
          onPress={onEdit}
          style={{ position: "absolute", top: 3, right: 0, zIndex: 1 }}
          hitSlop={12}
          link
        >
          <Ionicons name="md-create-outline" size={BOTTOM_TAB_ICON_SIZE} />
        </Button>
      )}

      <Text h2 center={canGoBack}>
        {title}
      </Text>
      {description && <Text p>{description}</Text>}
      <Divider size="tiny" />
    </View>
  );
}
