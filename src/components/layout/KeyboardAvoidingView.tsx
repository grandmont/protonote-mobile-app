import {
  KeyboardAvoidingView as RNKeyboardAvoidingView,
  Platform,
} from "react-native";

export default function KeyboardAvoidingView({
  children,
  keyboardVerticalOffset = 0,
}) {
  return (
    <RNKeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={keyboardVerticalOffset}
      style={{ flex: 1, backgroundColor: "transparent" }}
    >
      {children}
    </RNKeyboardAvoidingView>
  );
}
