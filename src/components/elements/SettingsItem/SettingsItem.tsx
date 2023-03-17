import { View, Card, Text, CardProps } from "react-native-ui-lib";
import Ionicons from "@expo/vector-icons/Ionicons";

import { BOTTOM_TAB_ICON_SIZE } from "../../../config/constants";

interface SettingsItemProps extends CardProps {
  title?: string | React.ReactNode;
  mode?: "default" | "danger";
  hasNext?: boolean;
}

export default function SettingsItem({
  title = null,
  mode = "default",
  hasNext = true,
  ...props
}: SettingsItemProps) {
  const color = mode === "danger" && "white";
  const backgroundColor = mode === "danger" ? "red" : "white";

  const isTitleString = typeof title === "string";

  return (
    <Card padding-16 paddingV-20 backgroundColor={backgroundColor} {...props}>
      <View row centerV spread>
        {isTitleString ? <Text color={color}>{title}</Text> : title}

        {hasNext && (
          <Ionicons
            name="md-chevron-forward"
            size={BOTTOM_TAB_ICON_SIZE}
            style={{ marginRight: -6 }}
          />
        )}
      </View>
    </Card>
  );
}
