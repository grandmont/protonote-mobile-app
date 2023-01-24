import { Button } from "react-native";

import ScreenLayout from "../components/layout/ScreenLayout";
import useAuth from "../hooks/useAuth";

export default function AuthScreen() {
  const { request, login } = useAuth();

  return (
    <ScreenLayout>
      <Button disabled={!request} title="Login" onPress={login} />
    </ScreenLayout>
  );
}
