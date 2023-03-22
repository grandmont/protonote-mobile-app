import { useState, useEffect, useId, useCallback, useRef } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { LoaderScreen, View } from "react-native-ui-lib";

import useAuth from "@hooks/useAuth";
import useLocalQuery from "@hooks/useLocalQuery";
import useDebounce from "@hooks/useDebounce";
import ScreenLayout from "@components/layout/ScreenLayout";
import SearchBar from "@components/search/SearchBar/SearchBar";
import KeyboardAccessoryView from "@components/layout/KeyboardAccessoryView";
import MemoList from "@components/search/MemoList/MemoList";
import Fade from "@components/elements/Fade/Fade";
import KeyboardAvoidingView from "@components/layout/KeyboardAvoidingView";
import EmptyMemoList from "@components/search/EmptyMemoList/EmptyMemoList";
import { Proto } from "@graphql/generated";

const SEARCH_DELAY = 200;

export default function SearchScreen() {
  const nativeId = useId();

  const { userInfo } = useAuth();

  const initialSearch = "";

  const searchRef = useRef(initialSearch);

  const [searchPhrase, setSearchPhrase] = useState(initialSearch);
  const [isSearchLoading, setIsSearchLoading] = useState(false);

  const debouncedValue = useDebounce(searchPhrase, SEARCH_DELAY);

  const {
    data,
    loading: isDataLoading,
    refetch,
  } = useLocalQuery("filterProto");

  useEffect(() => {
    if (!userInfo?.id) return;

    setIsSearchLoading(false);

    refetch({
      search: debouncedValue,
    });
  }, [debouncedValue, userInfo]);

  const handleSearchChange = (value: string) => {
    setIsSearchLoading(true);
    setSearchPhrase(value);
    searchRef.current = value;
  };

  const protos = (data ? data : []) as unknown[] as Proto[];

  const hasProtos = protos.length > 0;

  useFocusEffect(
    useCallback(() => {
      refetch({
        search: searchRef.current,
      });
    }, [])
  );

  return (
    <ScreenLayout divider={false}>
      <KeyboardAvoidingView>
        <View centerH marginB-48 height="100%">
          <SearchBar
            searchPhrase={searchPhrase}
            onChange={handleSearchChange}
            inputAccessoryViewID={nativeId}
          />

          {hasProtos ? <MemoList data={protos} /> : <EmptyMemoList />}

          <KeyboardAccessoryView nativeId={nativeId} />

          {(isSearchLoading || isDataLoading) && <LoaderScreen overlay />}
        </View>
      </KeyboardAvoidingView>
      <Fade bottom />
    </ScreenLayout>
  );
}
