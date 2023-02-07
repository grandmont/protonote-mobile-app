import { Text, View, ViewProps } from "react-native-ui-lib";

interface ScreenSectionProps extends ViewProps {
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
