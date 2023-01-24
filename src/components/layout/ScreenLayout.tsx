import { View } from "react-native-ui-lib";

export default function ScreenLayout({ children }) {
  return (
    <View flex useSafeArea marginH-18 marginV-12>
      {children}
    </View>
  );
}
