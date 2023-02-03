import { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { LoaderScreen } from "react-native-ui-lib";

import ScreenLayout from "../components/layout/ScreenLayout";
import { ProtosQueryDocument } from "../graphql/generated";
import useAuth from "../hooks/useAuth";
import { getWrittenDateString } from "../utils/parsers";
import Header from "../components/elements/Header/Header";

export default function MemoScreen({ route }) {
  const { userInfo } = useAuth();

  const { date } = route.params;

  const { data, loading } = useQuery(ProtosQueryDocument, {
    variables: {
      where: {
        userId: {
          equals: userInfo?.id,
        },
        dateString: {
          equals: date.dateString,
        },
      },
    },
  });

  useEffect(() => {
    if (!data) return;
    console.log(data);
  }, [data]);

  const title = getWrittenDateString(date.dateString);

  return (
    <ScreenLayout>
      <Header title={title} />

      {loading && <LoaderScreen overlay />}
    </ScreenLayout>
  );
}
