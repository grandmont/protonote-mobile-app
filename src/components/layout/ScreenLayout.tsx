import { Platform } from "react-native";
import Constants from "expo-constants";
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
  const style = {
    paddingTop: Constants.statusBarHeight + (Platform.OS === "ios" ? 18 : 0),
  };

  return (
    <View flex paddingH-18 bg-screenBG style={style} {...props}>
      {children}
      {divider && <Divider size={dividerSize} />}
    </View>
  );
}
