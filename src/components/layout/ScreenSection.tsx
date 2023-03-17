import { Text, View, ViewProps } from "react-native-ui-lib";

interface ScreenSectionProps extends ViewProps {
  title: string | React.ReactNode;
  children?: React.ReactNode;
}

export default function ScreenSection({
  title,
  children = null,
  ...props
}: ScreenSectionProps) {
  const isTitleString = typeof title === "string";

  return (
    <View {...props}>
      {isTitleString ? (
        <Text title marginB-8>
          {title}
        </Text>
      ) : (
        title
      )}
      {children}
    </View>
  );
}
