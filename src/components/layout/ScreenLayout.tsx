import { View, ViewProps } from "react-native-ui-lib";
import Divider, { DividerSizeType } from "../elements/Divider/Divider";

interface ScreenLayoutProps extends ViewProps {
  children: React.ReactNode;
  divider?: boolean;
  dividerSize?: DividerSizeType;
}

export default function ScreenLayout({
  children,
  divider = true,
  dividerSize = "big",
  ...props
}: ScreenLayoutProps) {
  return (
    <View flex paddingH-18 paddingT-72 bg-white {...props}>
      {children}
      {divider && <Divider size={dividerSize} />}
    </View>
  );
}
