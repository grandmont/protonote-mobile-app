import { View } from "react-native-ui-lib";

export default function ScreenLayout({ children }) {
  return (
    <View flex useSafeArea marginH-18 marginB-12>
      {children}
    </View>
  );
}
