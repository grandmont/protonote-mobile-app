import { useState } from "react";
import { useMutation } from "@apollo/client";
import { Button, View, LoaderScreen, Incubator } from "react-native-ui-lib";
const { Toast } = Incubator;

import {
  CreateProtoMutationDocument,
  GetMemoByDateStringDocument,
  ProtosQueryDocument,
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
  const nativeId = "id";

  const {
    date: { dateString },
  } = route.params;

  const [memoData, setMemoData] = useState({ description: null });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { userInfo } = useAuth();

  const [createMemoMutation] = useMutation(CreateProtoMutationDocument);

  const parsedDateString = dateString || getTodayDateString();
  const title = getWrittenDateString(parsedDateString);

  const handleCreateMemo = async () => {
    if (!memoData?.description) return;

    setIsLoading(true);

    const createMemoData = {
      ...memoData,
      title,
      dateString: parsedDateString,
    };

    try {
      await createMemoMutation({
        variables: {
          data: {
            ...createMemoData,
            user: {
              connect: {
                id: userInfo.id,
              },
            },
          },
        },
      });

      client.refetchQueries({
        include: [GetMemoByDateStringDocument, ProtosQueryDocument],
      });

      navigation.navigate("Home");
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
    <ScreenLayout dividerSize="small">
      <Header title={title} canGoBack />

      <KeyboardAvoidingView>
        <MemoEditor
          onChange={handleChangeMemoEditor}
          inputAccessoryViewID={nativeId}
        />
      </KeyboardAvoidingView>

      <View flex bottom>
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
