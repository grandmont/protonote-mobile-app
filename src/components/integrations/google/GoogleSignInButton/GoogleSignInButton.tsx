import { Button, ButtonProps, Text } from "react-native-ui-lib";
import { AntDesign } from "@expo/vector-icons";

export default function GoogleSignInButton({ ...props }: ButtonProps) {
  return (
    <Button {...props}>
      <AntDesign name="google" size={18} color="white" />
      <Text marginL-12 color="white">
        Sign in with Google
      </Text>
    </Button>
  );
}
