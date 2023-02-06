import { Colors } from "react-native-ui-lib";

Colors.loadColors({
  spotify: "#1DB954",
});

Colors.loadSchemes({
  light: {
    primary: "blue",

    screenBG: "white",
    textColor: Colors.grey10,
    moonOrSun: Colors.yellow30,
    mountainForeground: Colors.green30,
    mountainBackground: Colors.green50,
  },
  dark: {
    primary: "white",

    screenBG: Colors.grey10,
    textColor: Colors.white,
    moonOrSun: Colors.grey80,
    mountainForeground: Colors.violet10,
    mountainBackground: Colors.violet20,
  },
});
