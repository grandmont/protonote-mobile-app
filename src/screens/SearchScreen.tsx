import { useState, useEffect, useId } from "react";
import { useLazyQuery } from "@apollo/client";
import { LoaderScreen, View } from "react-native-ui-lib";

import useAuth from "@hooks/useAuth";
import ScreenLayout from "@components/layout/ScreenLayout";
import SearchBar from "@components/search/SearchBar/SearchBar";
import KeyboardAccessoryView from "@components/layout/KeyboardAccessoryView";
import MemoList from "@components/search/MemoList/MemoList";
import Fade from "@components/elements/Fade/Fade";
import {
  Proto,
  ProtosDocument,
  ProtoWhereInput,
  QueryMode,
} from "@graphql/generated";
import KeyboardAvoidingView from "@components/layout/KeyboardAvoidingView";
import useDebounce from "@hooks/useDebounce";
import EmptyMemoList from "@components/search/EmptyMemoList/EmptyMemoList";

export default function SearchScreen() {
  const nativeId = useId();

  const { userInfo } = useAuth();

  const [searchPhrase, setSearchPhrase] = useState("");
  const [isSearchLoading, setIsSearchLoading] = useState(false);

  const debouncedValue = useDebounce(searchPhrase, 1000);

  const filterOptions = {
    contains: debouncedValue,
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

  const [, { data, loading: isDataLoading, refetch }] = useLazyQuery(
    ProtosDocument,
    {
      variables,
      notifyOnNetworkStatusChange: true,
    }
  );

  useEffect(() => {
    if (!userInfo?.id) return;

    setIsSearchLoading(false);

    refetch(variables);
  }, [debouncedValue, userInfo]);

  const handleSearchChange = (value: string) => {
    setIsSearchLoading(true);

    setSearchPhrase(value);
  };

  const protos = (data ? data?.protos : []) as Proto[];

  const hasProtos = protos.length > 0;

  return (
    <ScreenLayout>
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
