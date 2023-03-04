import { LoaderScreen, Text, View } from "react-native-ui-lib";
import LottieView from "lottie-react-native";

import useAuth from "../hooks/useAuth";
import ScreenLayout from "../components/layout/ScreenLayout";
import GoogleSignInButton from "../components/integrations/google/GoogleSignInButton/GoogleSignInButton";

export default function AuthScreen() {
  const { login, isLoading } = useAuth();

  return (
    <ScreenLayout>
      <View flex center>
        <View center>
          <Text text30M>Welcome</Text>
          <Text sub>Please sign in to continue</Text>
        </View>

        <LottieView
          autoPlay
          style={{
            width: "100%",
          }}
          source={require("../../assets/PRODUCT/Animation 10/drawkit-grape-animation-10-LOOP.json")}
        />

        <View marginT-48>
          <GoogleSignInButton disabled={isLoading} onPress={login} />
        </View>
      </View>

      {isLoading && <LoaderScreen overlay />}
    </ScreenLayout>
  );
}
