import { Platform } from "react-native";

export default function usePlatform() {
  const isAndroid = Platform.OS === "android";
  const isIOS = Platform.OS === "ios";

  return {
    isAndroid,
    isIOS,
  };
}
