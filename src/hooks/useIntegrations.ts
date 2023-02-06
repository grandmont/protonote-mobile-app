import { useQuery } from "@apollo/client";
import { IntegrationsDocument } from "../graphql/generated";
import useAuth from "./useAuth";

export type IntegrationType = "spotify";

export default function useIntegrations() {
  const { userInfo } = useAuth();

  const { data } = useQuery(IntegrationsDocument, {
    variables: {
      where: {
        userId: {
          equals: userInfo.id,
        },
      },
    },
  });

  const hasIntegrations = data && !!data.integrations.length;

  return {
    hasIntegrations,
    integrations: data ? data.integrations : [],
  };
}
