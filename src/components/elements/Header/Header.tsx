import { View, Text, Button, Colors } from "react-native-ui-lib";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";

import Divider from "@components/elements/Divider/Divider";
import { BOTTOM_TAB_ICON_SIZE } from "@config/constants";

interface HeaderProps {
  title?: string;
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
          <Ionicons name="md-chevron-back" color={Colors.link} size={24} />
        </Button>
      )}

      {onEdit && (
        <Button
          onPress={onEdit}
          style={{ position: "absolute", top: 3, right: 0, zIndex: 1 }}
          hitSlop={12}
          link
        >
          <Feather name="edit" size={BOTTOM_TAB_ICON_SIZE} />
        </Button>
      )}

      <View height={28}>
        {title && (
          <Text h2 center={canGoBack}>
            {title}
          </Text>
        )}
      </View>

      {description && <Text p>{description}</Text>}
      <Divider size="tiny" />
    </View>
  );
}
