import { Button, ButtonProps, Text } from "react-native-ui-lib";
import { AntDesign } from "@expo/vector-icons";
import i18n from "@i18n";

export default function GoogleSignInButton({ ...props }: ButtonProps) {
  return (
    <Button style={{ width: 250, height: 36, borderRadius: 6 }} {...props}>
      <AntDesign name="google" size={11} color="white" />
      <Text google marginL-3 color="white">
        {i18n.t("common.integrations.google.signIn")}
      </Text>
    </Button>
  );
}
