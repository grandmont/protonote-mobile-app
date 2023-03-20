import { useEffect, useId, useState } from "react";
import { useMutation } from "@apollo/client";
import { View, Incubator } from "react-native-ui-lib";
const { Toast } = Incubator;

import useAuth from "@hooks/useAuth";
import useDebounce from "@hooks/useDebounce";
import MemoEditor from "@components/memo/MemoEditor/MemoEditor";
import ScreenLayout from "@components/layout/ScreenLayout";
import { client } from "@services/client";
import Header from "@components/elements/Header/Header";
import SaveMemoAction from "@components/memo/SaveMemoAction/SaveMemoAction";
import KeyboardAccessoryView from "@components/layout/KeyboardAccessoryView";
import KeyboardAvoidingView from "@components/layout/KeyboardAvoidingView";
import {
  CreateProtoMutationDocument,
  UpdateProtoMutationDocument,
  GetMemoByDateStringDocument,
  ProtosDocument,
} from "@graphql/generated";
import { getTodayDateString, getWrittenDateString } from "@utils/parsers";

const MEMO_DELAY = 500;

export default function CreateMemoScreen({ navigation, route }) {
  const nativeId = useId();

  const {
    date: { dateString, editData },
  } = route.params;

  const [memoId, setMemoId] = useState(editData?.id);
  const [memoData, setMemoData] = useState({ description: null });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const debouncedMemo = useDebounce(memoData, MEMO_DELAY);

  const { userInfo } = useAuth();

  const shouldCreate = !memoId;

  const [createMemo] = useMutation(CreateProtoMutationDocument);
  const [updateMemo] = useMutation(UpdateProtoMutationDocument);

  const parsedDateString = dateString || getTodayDateString();
  const title = getWrittenDateString(parsedDateString);

  const handleSaveMemo = async () => {
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
        id: memoId,
      },
    };

    try {
      if (shouldCreate) {
        const { data } = await createMemo({ variables: createMemoData });

        setMemoId(data.createOneProto.id);
      } else {
        await updateMemo({ variables: updateMemoData });
      }

      client.refetchQueries({
        include: [GetMemoByDateStringDocument, ProtosDocument],
      });
    } catch (error) {
      console.error(error);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!debouncedMemo?.description) return;

    handleSaveMemo();
  }, [debouncedMemo]);

  const handleChangeMemoEditor = (description: string) => {
    setIsLoading(true);
    setMemoData((prevState) => ({ ...prevState, description }));
  };

  const handleClose = () => {
    navigation.goBack();
  };

  return (
    <ScreenLayout dividerSize="invisible">
      <View row spread top>
        <Header canGoBack />

        <SaveMemoAction
          onPress={handleClose}
          disabled={isLoading}
          loading={isLoading}
        />
      </View>

      <KeyboardAvoidingView keyboardVerticalOffset={24}>
        <MemoEditor
          defaultValue={editData?.description}
          onChange={handleChangeMemoEditor}
          inputAccessoryViewID={nativeId}
        />
      </KeyboardAvoidingView>

      <KeyboardAccessoryView nativeId={nativeId} />

      <Toast
        visible={!!error}
        position="top"
        message={`Something went wrong!\n Please try again later.`}
        centerMessage
        autoDismiss={5000}
        onDismiss={() => setError(null)}
      />
    </ScreenLayout>
  );
}
