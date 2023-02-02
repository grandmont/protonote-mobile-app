import { View } from "react-native-ui-lib";
import Divider from "../elements/Divider/Divider";

interface ScreenLayoutProps {
  children: React.ReactNode;
  divider?: boolean;
}

export default function ScreenLayout({
  children,
  divider = true,
  ...props
}: ScreenLayoutProps) {
  return (
    <View flex paddingH-18 paddingT-72 bg-white {...props}>
      {children}
      {divider && <Divider size="big" />}
    </View>
  );
}
