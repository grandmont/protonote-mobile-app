import { useState, useEffect } from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";

import ScreenLayout from "../components/layout/ScreenLayout";
import SearchBar from "../components/elements/SearchBar/SearchBar";
import List from "../components/elements/List/List";
import { LoaderScreen } from "react-native-ui-lib";

export default function SearchScreen() {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const [fakeData, setFakeData] = useState();

  // get data from the fake api endpoint
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

  if (!fakeData) {
    return <LoaderScreen />;
  }

  return (
    <ScreenLayout>
      <SafeAreaView style={styles.root}>
        {!clicked && <Text style={styles.title}>Programming Languages</Text>}

        <SearchBar
          searchPhrase={searchPhrase}
          setSearchPhrase={setSearchPhrase}
          clicked={clicked}
          setClicked={setClicked}
        />
        {
          <List
            searchPhrase={searchPhrase}
            data={fakeData}
            setClicked={setClicked}
          />
        }
      </SafeAreaView>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  root: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    width: "100%",
    marginTop: 20,
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: "10%",
  },
});
