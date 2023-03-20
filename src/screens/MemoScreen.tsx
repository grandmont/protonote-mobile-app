import { useQuery } from "@apollo/client";
import { LoaderScreen } from "react-native-ui-lib";
import { useNavigation } from "@react-navigation/native";

import ScreenLayout from "@components/layout/ScreenLayout";
import useAuth from "@hooks/useAuth";
import Header from "@components/elements/Header/Header";
import MemoDetailsSection from "@components/memo/MemoDetailsSection/MemoDetailsSection";
import { Proto, ProtosDocument } from "@graphql/generated";
import { getWrittenDateString } from "@utils/parsers";

export default function MemoScreen({ route }) {
  const navigation = useNavigation();
  const { userInfo } = useAuth();

  const {
    date: { dateString },
  } = route.params;

  const { data, loading } = useQuery(ProtosDocument, {
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
    },
  });

  const title = getWrittenDateString(dateString);

  const [memo] = data ? data?.protos : [];

  const handleEdit =
    !loading &&
    !!memo?.description &&
    (() => {
      navigation.navigate("CreateMemo", {
        date: { dateString, editData: memo },
      });
    });

  return (
    <ScreenLayout divider={false}>
      <Header title={title} canGoBack onEdit={handleEdit} />

      {loading ? (
        <LoaderScreen overlay />
      ) : (
        <MemoDetailsSection dateString={dateString} {...(memo as Proto)} />
      )}
    </ScreenLayout>
  );
}
