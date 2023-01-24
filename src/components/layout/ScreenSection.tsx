import { Text, View } from "react-native-ui-lib";

interface ScreenSectionProps {
  title: string;
  children: React.ReactNode;
}

export default function ScreenSection({ title, children }: ScreenSectionProps) {
  return (
    <View>
      <Text title marginB-6>
        {title}
      </Text>
      {children}
    </View>
  );
}
