import { useQuery } from "@apollo/client";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import ScreenLayout from "@components/layout/ScreenLayout";
import useAuth from "@hooks/useAuth";
import Header from "@components/elements/Header/Header";
import AdBanner from "@components/home/AdBanner/AdBanner";
import MemoDetailsSection from "@components/memo/MemoDetailsSection/MemoDetailsSection";
import { ProtosDocument } from "@graphql/generated";
import { getWrittenDateString } from "@utils/parsers";
import { useCallback } from "react";
import useLocalQuery from "@hooks/useLocalQuery";

export default function MemoScreen({ route }) {
  const {
    date: { dateString },
  } = route.params;

  const navigation = useNavigation();

  const { userInfo } = useAuth();

  const {
    data: localData,
    loading: localLoading,
    refetch,
  } = useLocalQuery("proto");

  const { data } = useQuery(ProtosDocument, {
    variables: {
      where: {
        userId: {
          equals: userInfo?.id,
        },
        dateString: {
          equals: dateString,
        },
      },
      integrationsTake: 3,
      deezerTake: 3,
    },
  });

  const title = getWrittenDateString(dateString);

  const [memo] = data ? data?.protos : [];

  const [localMemo] = localData;

  const finalMemo = {
    ...localMemo,
    ...(memo && {
      protoId: memo.id,
      integrations: memo.integrations,
      deezer: memo.deezer,
      _count: memo._count,
    }),
  };

  const handleEdit =
    !!localMemo?.description &&
    (() => {
      navigation.navigate("CreateMemo", {
        date: { dateString, editData: localMemo },
      });
    });

  useFocusEffect(
    useCallback(() => {
      refetch({
        where: {
          dateString,
        },
      });
    }, [])
  );

  return (
    <ScreenLayout divider={false}>
      <Header title={title} canGoBack onEdit={handleEdit} />

      <AdBanner />

      <MemoDetailsSection
        dateString={dateString}
        localLoading={localLoading}
        {...(finalMemo as any)}
      />
    </ScreenLayout>
  );
}
