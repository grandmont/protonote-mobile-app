import { useId, useState } from "react";
import { useMutation } from "@apollo/client";
import { Button, View, LoaderScreen, Incubator } from "react-native-ui-lib";
const { Toast } = Incubator;

import {
  CreateProtoMutationDocument,
  CreateProtoMutationMutation,
  GetMemoByDateStringDocument,
  ProtosQueryDocument,
  UpdateProtoMutationDocument,
  UpdateProtoMutationMutation,
} from "../graphql/generated";
import MemoEditor from "../components/memo/MemoEditor/MemoEditor";
import ScreenLayout from "../components/layout/ScreenLayout";
import useAuth from "../hooks/useAuth";
import { client } from "../services/client";
import Header from "../components/elements/Header/Header";
import KeyboardAccessoryView from "../components/layout/KeyboardAccessoryView";
import KeyboardAvoidingView from "../components/layout/KeyboardAvoidingView";
import { getTodayDateString, getWrittenDateString } from "../utils/parsers";

export default function CreateMemoScreen({ navigation, route }) {
  const nativeId = useId();

  const {
    date: { dateString, editData },
  } = route.params;

  const [memoData, setMemoData] = useState({ description: null });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { userInfo } = useAuth();

  const [createOrUpdateMemoMutation] = useMutation<
    CreateProtoMutationMutation | UpdateProtoMutationMutation
  >(!editData ? CreateProtoMutationDocument : UpdateProtoMutationDocument);

  const parsedDateString = dateString || getTodayDateString();
  const title = getWrittenDateString(parsedDateString);

  const handleCreateMemo = async () => {
    if (!memoData?.description) return;

    setIsLoading(true);

    const createMemoData = {
      data: {
        ...memoData,
        title,
        dateString: parsedDateString,
        user: {
          connect: {
            id: userInfo.id,
          },
        },
      },
    };

    const updateMemoData = {
      data: {
        description: {
          set: memoData.description,
        },
      },
      where: {
        id: editData?.id,
      },
    };

    const variables = !editData ? createMemoData : updateMemoData;

    try {
      await createOrUpdateMemoMutation({ variables });

      client.refetchQueries({
        include: [GetMemoByDateStringDocument, ProtosQueryDocument],
      });

      navigation.goBack();
    } catch (error) {
      console.error(error);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChangeMemoEditor = (description: string) => {
    setMemoData((prevState) => ({ ...prevState, description }));
  };

  return (
    <ScreenLayout dividerSize="regular">
      <Header title={title} canGoBack />

      <KeyboardAvoidingView keyboardVerticalOffset={96}>
        <MemoEditor
          defaultValue={editData?.description}
          onChange={handleChangeMemoEditor}
          inputAccessoryViewID={nativeId}
        />
      </KeyboardAvoidingView>

      <View flex bottom centerH>
        <Button
          label="Save"
          onPress={handleCreateMemo}
          disabled={isLoading}
          marginT-24
        />
      </View>

      <KeyboardAccessoryView nativeId={nativeId} />

      <Toast
        visible={!!error}
        position="top"
        message={`Something went wrong!\n Please try again later.`}
        centerMessage
        autoDismiss={5000}
        onDismiss={() => setError(null)}
      />

      {isLoading && <LoaderScreen overlay />}
    </ScreenLayout>
  );
}
