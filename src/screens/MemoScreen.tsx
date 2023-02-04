import { useQuery } from "@apollo/client";
import { LoaderScreen } from "react-native-ui-lib";

import ScreenLayout from "../components/layout/ScreenLayout";
import { ProtosQueryDocument } from "../graphql/generated";
import useAuth from "../hooks/useAuth";
import { getWrittenDateString } from "../utils/parsers";
import Header from "../components/elements/Header/Header";
import MemoDetailsSection from "../components/memo/MemoDetailsSection/MemoDetailsSection";
import NoMemoDetailsSection from "../components/memo/NoMemoDetailsSection/NoMemoDetailsSection";

export default function MemoScreen({ route }) {
  const { userInfo } = useAuth();

  const {
    date: { dateString },
  } = route.params;

  const { data, loading } = useQuery(ProtosQueryDocument, {
    variables: {
      where: {
        userId: {
          equals: userInfo?.id,
        },
        dateString: {
          equals: dateString,
        },
      },
    },
  });

  const title = getWrittenDateString(dateString);

  const [memo] = data && data.protos;

  return (
    <ScreenLayout>
      <Header title={title} canGoBack />

      {!loading &&
        (memo ? (
          <MemoDetailsSection {...memo} />
        ) : (
          <NoMemoDetailsSection dateString={dateString} />
        ))}

      {loading && <LoaderScreen overlay />}
    </ScreenLayout>
  );
}
