import { useState } from "react";
import { Keyboard, KeyboardAvoidingView, Platform } from "react-native";
import { useMutation } from "@apollo/client";
import {
  Text,
  Button,
  View,
  LoaderScreen,
  Incubator,
} from "react-native-ui-lib";
const { Toast } = Incubator;

import {
  CreateProtoMutationDocument,
  GetTodayDocument,
  ProtosQueryDocument,
} from "../graphql/generated";
import MemoEditor from "../components/memo/MemoEditor/MemoEditor";
import Divider from "../components/elements/Divider/Divider";
import ScreenLayout from "../components/layout/ScreenLayout";
import useAuth from "../hooks/useAuth";
import { client } from "../services/client";

export default function CreateMemoScreen({ navigation }) {
  const [memoData, setMemoData] = useState({ title: null });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { userInfo } = useAuth();

  const [createMemoMutation] = useMutation(CreateProtoMutationDocument);

  const handleCreateMemo = async () => {
    if (!memoData?.title) return;

    setIsLoading(true);

    try {
      await createMemoMutation({
        variables: {
          data: {
            ...memoData,
            user: {
              connect: {
                id: userInfo.id,
              },
            },
          },
        },
      });

      client.refetchQueries({
        include: [GetTodayDocument, ProtosQueryDocument],
      });

      navigation.navigate("Home");
    } catch (error) {
      console.error(error);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChangeMemoEditor = (title: string) => {
    setMemoData((prevState) => ({ ...prevState, title }));
  };

  return (
    <ScreenLayout>
      <View onTouchStart={Keyboard.dismiss}>
        <Text h2>Create Memo</Text>
        <Divider size="small" />
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <MemoEditor onChange={handleChangeMemoEditor} />
      </KeyboardAvoidingView>

      <View flex bottom>
        <Button
          label="Save"
          onPress={handleCreateMemo}
          disabled={isLoading}
          marginT-24
        />
      </View>

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
