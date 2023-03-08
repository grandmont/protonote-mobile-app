import { Button, ButtonProps, Text } from "react-native-ui-lib";
import { AntDesign } from "@expo/vector-icons";

export default function GoogleSignInButton({ ...props }: ButtonProps) {
  return (
    <Button style={{ width: 200, height: 36, borderRadius: 6 }} {...props}>
      <AntDesign name="google" size={11} color="white" />
      <Text google marginL-3 color="white">
        Sign in with Google
      </Text>
    </Button>
  );
}
