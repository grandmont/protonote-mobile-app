import { useEffect } from "react";
import * as WebBrowser from "expo-web-browser";
import { useAuthRequest } from "expo-auth-session";
import { useMutation } from "@apollo/client";
import { View } from "react-native-ui-lib";

import SwitchItem from "@components/elements/SwitchItem/SwitchItem";
import { client } from "@services/client";
import {
  IntegrationsDocument,
  RegisterDeezerDocument,
} from "@graphql/generated";
import useAPISync from "@hooks/useAPISync";
import { Image } from "react-native";

WebBrowser.maybeCompleteAuthSession();

const DEEZER_APP_ID = "593224";
const DEEZER_REDIRECT_URL =
  "https://protonote-api-production.up.railway.app/deezer";

const discovery = {
  authorizationEndpoint: `https://connect.deezer.com/oauth/auth.php?app_id=${DEEZER_APP_ID}&redirect_uri=${DEEZER_REDIRECT_URL}&perms=basic_access,listening_history,offline_access,email`,
};

export default function DeezerIntegration({
  hasIntegration,
  onStart,
  onSuccess,
  onCancel,
}: IntegrationPropsType) {
  const [registerDeezer] = useMutation(RegisterDeezerDocument);

  const { log } = useAPISync();

  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: DEEZER_APP_ID,
      usePKCE: false,
      redirectUri: DEEZER_REDIRECT_URL,
    },
    discovery
  );

  useEffect(() => {
    const deezerResponse = response as any;

    const registerIntegration = async () => {
      await log({
        variables: {
          message: JSON.stringify(deezerResponse),
        },
      });

      if (deezerResponse?.params?.accessToken) {
        const { accessToken } = deezerResponse.params;

        await registerDeezer({
          variables: {
            input: {
              accessToken,
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
          source={require("assets/deezer-logo.png")}
          style={{
            width: 76,
            height: 15,
          }}
        />
      </View>
    </SwitchItem>
  );
}
