import { Text, View } from "react-native-ui-lib";

interface ScreenSectionProps {
  title: string;
  children?: React.ReactNode;
}

export default function ScreenSection({
  title,
  children = null,
  ...props
}: ScreenSectionProps) {
  return (
    <View {...props}>
      <Text title marginB-8>
        {title}
      </Text>
      {children}
    </View>
  );
}
