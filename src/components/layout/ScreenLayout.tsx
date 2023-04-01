import Constants from "expo-constants";
import { View, ViewProps } from "react-native-ui-lib";

import Divider, { DividerSizeType } from "@components/elements/Divider/Divider";
import usePlatform from "@hooks/usePlatform";

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
  const { isIOS } = usePlatform();

  const style = {
    paddingTop: isIOS ? Constants.statusBarHeight + 18 : 48,
    marginTop: isIOS ? 0 : Constants.statusBarHeight * -1,
  };

  return (
    <View flex paddingH-18 bg-screenBG style={style} {...props}>
      {children}
      {divider && <Divider size={dividerSize} />}
    </View>
  );
}
