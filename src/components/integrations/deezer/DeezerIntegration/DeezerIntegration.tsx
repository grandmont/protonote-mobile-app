import { useEffect } from "react";
import * as WebBrowser from "expo-web-browser";
import { useAuthRequest } from "expo-auth-session";
import { useMutation } from "@apollo/client";
import { View, Text } from "react-native-ui-lib";
import { FontAwesome5 } from "@expo/vector-icons";

import SwitchItem from "@components/elements/SwitchItem/SwitchItem";
import { client } from "@services/client";
import {
  IntegrationsDocument,
  RegisterDeezerDocument,
} from "@graphql/generated";

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

        return onSuccess && onSuccess();
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
        <FontAwesome5 name="deezer" size={24} />
        <Text marginL-12 title>
          Deezer
        </Text>
      </View>
    </SwitchItem>
  );
}
