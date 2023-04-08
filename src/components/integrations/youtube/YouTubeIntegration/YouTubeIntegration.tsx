import { useEffect } from "react";
import { Image } from "react-native";
import * as WebBrowser from "expo-web-browser";
import { useAuthRequest } from "expo-auth-session";
import { useMutation } from "@apollo/client";
import { View } from "react-native-ui-lib";

import { client } from "@services/client";
import useAPISync from "@hooks/useAPISync";
import SwitchItem from "@components/elements/SwitchItem/SwitchItem";
import {
  IntegrationsDocument,
  RegisterYouTubeDocument,
} from "@graphql/generated";

WebBrowser.maybeCompleteAuthSession();

const YOUTUBE_CLIENT_ID =
  "227660563070-islh2dasb2fbl71gvs8bb8u4cvi1oii6.apps.googleusercontent.com";

export default function YouTubeIntegration({
  hasIntegration,
  onStart,
  onSuccess,
  onCancel,
}: IntegrationPropsType) {
  const redirectUri = "https://beememo.grandmont.io/youtube";

  const [registerYouTube] = useMutation(RegisterYouTubeDocument);

  const { log } = useAPISync();

  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: YOUTUBE_CLIENT_ID,
      usePKCE: false,
      responseType: "code",
      redirectUri,
      extraParams: {
        scope: "https://www.googleapis.com/auth/youtube.readonly",
        include_granted_scopes: "true",
        access_type: "offline",
        prompt: "consent",
      },
    },
    {
      authorizationEndpoint: "https://accounts.google.com/o/oauth2/v2/auth",
    }
  );

  useEffect(() => {
    const registerIntegration = async () => {
      await log({
        variables: {
          message: JSON.stringify(response),
        },
      });

      if (response?.type === "success" && response?.params?.accessToken) {
        const { accessToken, refreshToken } = response.params;

        await registerYouTube({
          variables: {
            input: {
              accessToken,
              refreshToken,
            },
          },
        });

        client.refetchQueries({
          include: [IntegrationsDocument],
        });

        return onSuccess();
      }

      return onCancel();
    };

    registerIntegration();
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
          source={require("assets/yt_logo.png")}
          style={{
            width: 76,
            height: 17,
          }}
        />
      </View>
    </SwitchItem>
  );
}
