import { useQuery } from "@apollo/client";

import {
  Integration,
  IntegrationProvider,
  IntegrationsDocument,
} from "@graphql/generated";
import useAuth from "@hooks/useAuth";

type IntegrationsMap = {
  spotifyIntegration?: Integration;
};

export default function useIntegrations() {
  const { userInfo } = useAuth();

  const { data } = useQuery(IntegrationsDocument, {
    variables: {
      where: {
        userId: {
          equals: userInfo?.id,
        },
      },
    },
  });

  const hasIntegrations = data && !!data.integrations.length;

  const integrations: IntegrationsMap = (data ? data.integrations : []).reduce(
    (acc, cur) => {
      if (cur.provider === IntegrationProvider.Spotify)
        return {
          ...acc,
          spotifyIntegration: cur,
        };

      return {
        ...acc,
      };
    },
    {}
  );

  return {
    hasIntegrations,
    integrations,
  };
}
