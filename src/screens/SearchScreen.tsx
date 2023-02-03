import { useState, useEffect } from "react";
import { LoaderScreen, View } from "react-native-ui-lib";

import ScreenLayout from "../components/layout/ScreenLayout";
import SearchBar from "../components/elements/SearchBar/SearchBar";
import List from "../components/elements/List/List";
import Fade from "../components/elements/Fade/Fade";

export default function SearchScreen() {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const [fakeData, setFakeData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const apiResponse = await fetch(
        "https://my-json-server.typicode.com/kevintomas1995/logRocket_searchBar/languages"
      );
      const data = await apiResponse.json();
      setFakeData(data);
    };

    getData();
  }, []);

  if (!fakeData) return <LoaderScreen overlay />;

  return (
    <ScreenLayout>
      <View centerH marginB-48>
        <SearchBar
          searchPhrase={searchPhrase}
          setSearchPhrase={setSearchPhrase}
          // clicked={clicked}
          setClicked={setClicked}
        />

        <List
          searchPhrase={searchPhrase}
          data={fakeData}
          setClicked={setClicked}
        />
        <Fade bottom />
      </View>
    </ScreenLayout>
  );
}
