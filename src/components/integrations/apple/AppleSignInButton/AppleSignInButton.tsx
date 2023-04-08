import * as AppleAuthentication from "expo-apple-authentication";

export default function AppleSignInButton({ onPress }) {
  return (
    <AppleAuthentication.AppleAuthenticationButton
      buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
      buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
      cornerRadius={5}
      style={{ width: 250, height: 36 }}
      onPress={onPress}
    />
  );
}
