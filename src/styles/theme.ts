import { Colors, ThemeManager } from "react-native-ui-lib";

ThemeManager.setComponentTheme("Button", (props, context) => {
  return {
    backgroundColor: Colors.secondary,
  };
});
