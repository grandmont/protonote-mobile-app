import React from "react";
import { FlatList } from "react-native";
import { Card, Colors, Text, View } from "react-native-ui-lib";
import Divider from "../Divider/Divider";

// definition of the Item, which will be rendered in the FlatList
const Item = ({ name, details }) => (
  <View marginT-12>
    <Card
      padding-16
      paddingT-12
      enableShadow={false}
      style={{
        borderWidth: 1,
        borderColor: "#ededed",
      }}
    >
      <Text title>{name}</Text>
      <Text>{details}</Text>
    </Card>
  </View>
);

// the filter
const List = ({ searchPhrase, setClicked, data }) => {
  const renderItem = ({ item }) => {
    if (item.spacing) {
      return <Divider size="huge" />;
    }

    // when no input, show all
    if (searchPhrase === "") {
      return <Item name={item.name} details={item.details} />;
    }

    // filter of the name
    if (
      item.name
        .toUpperCase()
        .includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))
    ) {
      return <Item name={item.name} details={item.details} />;
    }

    // filter of the description
    if (
      item.details
        .toUpperCase()
        .includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))
    ) {
      return <Item name={item.name} details={item.details} />;
    }
  };

  const spacing = { id: 0, spacing: true };

  return (
    <View width="100%" backgroundColor="white">
      <View
        onStartShouldSetResponder={() => {
          setClicked(false);
          return false;
        }}
      >
        <FlatList
          data={[...data, spacing]}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          style={{
            height: "100%",
            flexGrow: 0,
          }}
        />
      </View>
    </View>
  );
};

export default List;
