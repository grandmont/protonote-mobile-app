import {
  KeyboardAvoidingView as RNKeyboardAvoidingView,
  Platform,
} from "react-native";

export default function KeyboardAvoidingView({ children }) {
  return (
    <RNKeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={96}
      style={{ flex: 1 }}
    >
      {children}
    </RNKeyboardAvoidingView>
  );
}
