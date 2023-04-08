import { useEffect } from "react";
import Constants from "expo-constants";
import { Platform, Image } from "react-native";
import * as WebBrowser from "expo-web-browser";
import { makeRedirectUri, useAuthRequest } from "expo-auth-session";
import { useMutation } from "@apollo/client";
import { View, Text } from "react-native-ui-lib";
import Entypo from "@expo/vector-icons/Entypo";

import {
  IntegrationProvider,
  IntegrationsDocument,
  RegisterIntegrationDocument,
  SwapSpotifyCodeDocument,
} from "@graphql/generated";
import { client } from "@services/client";
import SwitchItem from "@components/elements/SwitchItem/SwitchItem";

const SCHEME = Constants.manifest.scheme;
const useProxy = Constants.appOwnership === "expo" && Platform.OS !== "web";

WebBrowser.maybeCompleteAuthSession();

const CLIENT_ID = "d685a786a97e467a937d302d52a3867f";

const discovery = {
  authorizationEndpoint: "https://accounts.spotify.com/authorize",
  tokenEndpoint: "https://accounts.spotify.com/api/token",
};

export default function SpotifyIntegration({
  hasIntegration,
  onStart,
  onSuccess,
  onCancel,
}: IntegrationPropsType) {
  const [swapSpotifyCode] = useMutation(SwapSpotifyCodeDocument);
  const [registerIntegration] = useMutation(RegisterIntegrationDocument);

  const redirectUri = useProxy
    ? "exp://localhost:19000/--/"
    : makeRedirectUri({
        // For usage in bare and standalone
        native: `${SCHEME}://redirect`,
      });

  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: CLIENT_ID,
      scopes: [
        "user-read-private",
        "user-read-email",
        "user-read-playback-state",
        "user-read-recently-played",
      ],
      usePKCE: false,
      redirectUri,
    },
    discovery
  );

  useEffect(() => {
    if (["cancel", "dismiss", "error"].includes(response?.type)) {
      return onCancel();
    }

    if (response?.type === "success") {
      const persistAccessToken = async () => {
        const { code } = response.params;

        const swapResponse = await swapSpotifyCode({
          variables: { input: { code, redirectUri } },
        });

        if (!swapResponse || swapResponse.errors) {
          console.log("swapResponse error:", swapResponse);
          // Deal with API error
          return;
        }

        const {
          data: {
            swapSpotifyCode: { accessToken, refreshToken },
          },
        } = swapResponse;

        const registerResponse = await registerIntegration({
          variables: {
            input: {
              accessToken,
              refreshToken,
              provider: IntegrationProvider.Spotify,
            },
          },
        });

        if (!registerResponse || registerResponse.errors) {
          console.log("registerIntegrationResponse error");
          // Deal with API error
          return;
        }

        client.refetchQueries({
          include: [IntegrationsDocument],
        });

        onSuccess && onSuccess();
      };

      persistAccessToken();
    }
  }, [response]);

  const prompt = async () => {
    if (hasIntegration) return;
    onStart();
    await promptAsync();
  };

  return (
    <SwitchItem
      disabled={!request}
      value={hasIntegration}
      onValueChange={prompt}
    >
      <View row centerV>
        <Image
          source={require("assets/Spotify_Logo_RGB_Black.png")}
          style={{
            width: 76,
            height: 23,
          }}
        />
      </View>
    </SwitchItem>
  );
}
