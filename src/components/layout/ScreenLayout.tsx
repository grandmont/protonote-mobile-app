import { View } from "react-native-ui-lib";

export default function ScreenLayout({ children }) {
  return (
    <View flex paddingH-18 paddingT-72 paddingB-12 bg-white>
      {children}
    </View>
  );
}
