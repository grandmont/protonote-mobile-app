import { View } from "react-native-ui-lib";
import Divider from "../elements/Divider/Divider";

export default function ScreenLayout({ children, ...props }) {
  return (
    <View flex paddingH-18 paddingT-72 bg-white {...props}>
      {children}
      <Divider size="big" />
    </View>
  );
}
