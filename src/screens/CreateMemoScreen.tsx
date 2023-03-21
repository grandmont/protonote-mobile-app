import { useEffect, useId, useState } from "react";
import { View, Incubator } from "react-native-ui-lib";
const { Toast } = Incubator;

import useDebounce from "@hooks/useDebounce";
import MemoEditor from "@components/memo/MemoEditor/MemoEditor";
import ScreenLayout from "@components/layout/ScreenLayout";
import Header from "@components/elements/Header/Header";
import SaveMemoAction from "@components/memo/SaveMemoAction/SaveMemoAction";
import KeyboardAccessoryView from "@components/layout/KeyboardAccessoryView";
import KeyboardAvoidingView from "@components/layout/KeyboardAvoidingView";
import { getTodayDateString, getWrittenDateString } from "@utils/parsers";
import { upsertLocalProto } from "@database/services/ProtoService";
import { ProtoModel } from "@database/models/ProtoModel";

const MEMO_DELAY = 200;

export default function CreateMemoScreen({ navigation, route }) {
  const nativeId = useId();

  const {
    date: { dateString, editData },
  } = route.params;

  const [memoData, setMemoData] = useState({ description: null });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const debouncedMemo = useDebounce(memoData, MEMO_DELAY);

  const parsedDateString = dateString || getTodayDateString();
  const title = getWrittenDateString(parsedDateString);

  const handleSaveLocalMemo = async () => {
    setIsLoading(true);

    const localProto = {
      title,
      description: memoData.description,
      dateString: parsedDateString,
    } as ProtoModel;

    try {
      await upsertLocalProto(localProto);
    } catch (error) {
      console.error(error);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  // Debounce
  useEffect(() => {
    if (!debouncedMemo?.description) return;

    // handleSaveMemo();
    handleSaveLocalMemo();
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
