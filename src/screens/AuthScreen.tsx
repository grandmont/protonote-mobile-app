import { Button } from "react-native";
import { LoaderScreen } from "react-native-ui-lib";

import ScreenLayout from "../components/layout/ScreenLayout";
import useAuth from "../hooks/useAuth";

export default function AuthScreen() {
  const { login, isLoading } = useAuth();

  return (
    <ScreenLayout>
      <Button disabled={isLoading} title="Login" onPress={login} />

      {isLoading && <LoaderScreen overlay />}
    </ScreenLayout>
  );
}
