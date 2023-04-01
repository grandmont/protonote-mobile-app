import { useQuery } from "@apollo/client";
import { LoaderScreen } from "react-native-ui-lib";

import ScreenLayout from "@components/layout/ScreenLayout";
import Header from "@components/elements/Header/Header";
import SpotifyList from "@components/integrations/spotify/SpotifyList/SpotifyList";
import Fade from "@components/elements/Fade/Fade";
import {
  FindManyDeezerDataDocument,
  FindManyIntegrationDataDocument,
  IntegrationProvider,
} from "@graphql/generated";
import DeezerList from "@components/integrations/deezer/DeezerList/DeezerList";

export default function IntegrationDataScreen({ route }) {
  const { title, protoId, provider } = route.params;

  const integrationQuery = {
    [IntegrationProvider.Spotify]: FindManyIntegrationDataDocument,
    [IntegrationProvider.Deezer]: FindManyDeezerDataDocument,
  }[provider];

  const { data, loading } = useQuery(integrationQuery, {
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

  const listData = data
    ? {
        [IntegrationProvider.Spotify]: data?.findManyIntegrationData,
        [IntegrationProvider.Deezer]: data?.findManyDeezerData,
      }[provider]
    : [];

  const ListComponent = {
    [IntegrationProvider.Spotify]: SpotifyList,
    [IntegrationProvider.Deezer]: DeezerList,
  }[provider];

  return (
    <ScreenLayout divider={false}>
      <Header title={title} canGoBack />

      {/* Skeleton would be nice here */}
      {loading ? <LoaderScreen overlay /> : <ListComponent data={listData} />}

      <Fade bottom />
    </ScreenLayout>
  );
}
