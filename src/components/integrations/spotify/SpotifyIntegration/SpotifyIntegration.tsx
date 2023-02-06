import { useEffect } from "react";
import * as WebBrowser from "expo-web-browser";
import { useAuthRequest } from "expo-auth-session";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useMutation } from "@apollo/client";

import {
  IntegrationsDocument,
  RegisterIntegrationDocument,
  SwapSpotifyCodeDocument,
} from "../../../../graphql/generated";
import SpotifyButton from "../SpotifyButton/SpotifyButton";
import { client } from "../../../../services/client";

WebBrowser.maybeCompleteAuthSession();

const CLIENT_ID = "d685a786a97e467a937d302d52a3867f";

// Endpoint
const discovery = {
  authorizationEndpoint: "https://accounts.spotify.com/authorize",
  tokenEndpoint: "https://accounts.spotify.com/api/token",
};

interface SpotifyIntegrationProps {
  onSuccess: () => void;
}

export default function SpotifyIntegration({
  onSuccess,
}: SpotifyIntegrationProps) {
  const [swapSpotifyCode] = useMutation(SwapSpotifyCodeDocument);

  const [registerIntegrationMutation] = useMutation(
    RegisterIntegrationDocument
  );

  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: CLIENT_ID,
      scopes: [
        "user-read-private",
        "user-read-email",
        "playlist-modify-public",
        "user-read-playback-state",
      ],
      usePKCE: false,
      redirectUri: "exp://localhost:19000/--/",
    },
    discovery
  );

  useEffect(() => {
    if (response?.type === "success") {
      const persistAccessToken = async () => {
        const { code } = response.params;

        const swapResponse = await swapSpotifyCode({
          variables: { input: { code } },
        });

        if (!swapResponse || swapResponse.errors) {
          console.log("swapResponse error");
          // Deal with API error
          return;
        }

        const {
          data: {
            swapSpotifyCode: { accessToken },
          },
        } = swapResponse;

        const registerResponse = await registerIntegrationMutation({
          variables: {
            input: {
              accessToken,
            },
          },
        });

        if (!registerResponse || registerResponse.errors) {
          console.log("registerIntegrationResponse error");
          // Deal with API error
          return;
        }

        await AsyncStorage.setItem("spotify", accessToken);
        client.refetchQueries({
          include: [IntegrationsDocument],
        });
        onSuccess();
      };

      persistAccessToken();
    }
  }, [response]);

  const registerIntegration = async () => {
    await promptAsync();
  };

  return <SpotifyButton disabled={!request} onPress={registerIntegration} />;
}
