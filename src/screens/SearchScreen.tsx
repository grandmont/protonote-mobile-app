import { useState, useEffect, useDeferredValue, useId } from "react";
import { useLazyQuery } from "@apollo/client";
import { LoaderScreen, View } from "react-native-ui-lib";

import useAuth from "../hooks/useAuth";
import ScreenLayout from "../components/layout/ScreenLayout";
import SearchBar from "../components/search/SearchBar/SearchBar";
import KeyboardAccessoryView from "../components/layout/KeyboardAccessoryView";
import MemoList from "../components/search/MemoList/MemoList";
import Fade from "../components/elements/Fade/Fade";
import {
  ProtosQueryDocument,
  ProtoWhereInput,
  QueryMode,
} from "../graphql/generated";
import KeyboardAvoidingView from "../components/layout/KeyboardAvoidingView";

export default function SearchScreen() {
  const nativeId = useId();

  const [searchPhrase, setSearchPhrase] = useState("");
  const deferredSearchPhrase = useDeferredValue(searchPhrase);
  const { userInfo } = useAuth();

  const filterOptions = {
    contains: deferredSearchPhrase,
    mode: QueryMode.Insensitive,
  };

  const variables = {
    where: {
      userId: {
        equals: userInfo?.id,
      },
      OR: [
        {
          title: filterOptions,
        },
        {
          description: filterOptions,
        },
      ],
    } as ProtoWhereInput,
  };

  const [, { data, loading, refetch }] = useLazyQuery(ProtosQueryDocument, {
    variables,
  });

  useEffect(() => {
    if (!userInfo?.id) return;

    refetch(variables);
  }, [deferredSearchPhrase, userInfo]);

  return (
    <ScreenLayout>
      <KeyboardAvoidingView>
        <View centerH marginB-48>
          <SearchBar
            searchPhrase={searchPhrase}
            setSearchPhrase={setSearchPhrase}
            inputAccessoryViewID={nativeId}
          />

          <MemoList data={data?.protos} />

          <KeyboardAccessoryView nativeId={nativeId} />

          {loading && <LoaderScreen overlay />}
        </View>
      </KeyboardAvoidingView>
      <Fade bottom />
    </ScreenLayout>
  );
}
