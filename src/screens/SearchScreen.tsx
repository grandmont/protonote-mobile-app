import { useState, useEffect, useDeferredValue, useId } from "react";
import { useLazyQuery } from "@apollo/client";
import { LoaderScreen, View } from "react-native-ui-lib";

import ScreenLayout from "../components/layout/ScreenLayout";
import SearchBar from "../components/search/SearchBar/SearchBar";
import KeyboardAccessoryView from "../components/layout/KeyboardAccessoryView";
import MemoList from "../components/search/MemoList/MemoList";
import Fade from "../components/elements/Fade/Fade";
import { ProtosQueryDocument, QueryMode } from "../graphql/generated";
import KeyboardAvoidingView from "../components/layout/KeyboardAvoidingView";

export default function SearchScreen() {
  const nativeId = useId();

  const [searchPhrase, setSearchPhrase] = useState("");

  const deferredSearchPhrase = useDeferredValue(searchPhrase);
  const [, { data, loading, refetch }] = useLazyQuery(ProtosQueryDocument);

  useEffect(() => {
    const filterOptions = {
      contains: deferredSearchPhrase,
      mode: QueryMode.Insensitive,
    };

    refetch({
      where: {
        OR: [
          {
            title: filterOptions,
          },
          {
            description: filterOptions,
          },
        ],
      },
    });
  }, [deferredSearchPhrase]);

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
