import { useEffect } from "react";
import * as WebBrowser from "expo-web-browser";
import { useAuthRequest } from "expo-auth-session";
import { useMutation } from "@apollo/client";
import { View, Text } from "react-native-ui-lib";
import Constants from "expo-constants";
import AntDesign from "@expo/vector-icons/AntDesign";

import SwitchItem from "@components/elements/SwitchItem/SwitchItem";
import { client } from "@services/client";
import {
  IntegrationsDocument,
  RegisterDeezerDocument,
} from "@graphql/generated";

const SCHEME = Constants.manifest.scheme;

WebBrowser.maybeCompleteAuthSession();

const YOUTUBE_CLIENT_ID =
  "227660563070-islh2dasb2fbl71gvs8bb8u4cvi1oii6.apps.googleusercontent.com";
// const YOUTUBE_CLIENT_SECRET = "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";

export default function YouTubeIntegration({
  hasIntegration,
  onStart,
  onSuccess,
  onCancel,
}: IntegrationPropsType) {
  //   const [registerDeezer] = useMutation(RegisterDeezerDocument);

  const redirectUri = `${SCHEME}://redirect`;

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
    console.log(response);
  }, [response]);

  const prompt = async () => {
    await promptAsync();
  };

  return (
    <SwitchItem
      disabled={!request}
      value={hasIntegration}
      onValueChange={prompt}
    >
      <View row centerV>
        <AntDesign name="youtube" size={24} />
        <Text marginL-12 title>
          YouTube
        </Text>
      </View>
    </SwitchItem>
  );
}
