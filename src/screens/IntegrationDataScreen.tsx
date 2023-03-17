import { useQuery } from "@apollo/client";

import ScreenLayout from "../components/layout/ScreenLayout";
import Header from "../components/elements/Header/Header";
import SpotifyList from "../components/integrations/spotify/SpotifyList/SpotifyList";
import Fade from "../components/elements/Fade/Fade";
import { GetIntegrationDataDocument } from "../graphql/generated";
import { LoaderScreen } from "react-native-ui-lib";

export default function IntegrationDataScreen({ route }) {
  const { title, protoId } = route.params;

  const { data, loading } = useQuery(GetIntegrationDataDocument, {
    variables: {
      where: {
        protos: {
          some: {
            protoId: {
              equals: protoId,
            },
          },
        },
      },
    },
  });

  const integrationData = data ? data?.findManyIntegrationData : [];

  return (
    <ScreenLayout divider={false}>
      <Header title={title} canGoBack />

      {/* Skeleton would be nice here */}
      {loading ? (
        <LoaderScreen overlay />
      ) : (
        <SpotifyList data={integrationData} />
      )}

      <Fade bottom />
    </ScreenLayout>
  );
}
