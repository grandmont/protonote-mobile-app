import { KeyboardAvoidingView as RNKeyboardAvoidingView } from "react-native";
import usePlatform from "../../hooks/usePlatform";

export default function KeyboardAvoidingView({
  children,
  keyboardVerticalOffset = 0,
}) {
  const { isIOS } = usePlatform();

  return (
    <RNKeyboardAvoidingView
      behavior={isIOS ? "padding" : "height"}
      keyboardVerticalOffset={keyboardVerticalOffset}
      style={{ flex: 1, backgroundColor: "transparent" }}
    >
      {children}
    </RNKeyboardAvoidingView>
  );
}
