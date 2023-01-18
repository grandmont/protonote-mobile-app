import { useEffect } from "react";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import AppLoading from "expo-app-loading";
import { gql, useQuery } from "@apollo/client";
import { useNavigation } from "@react-navigation/native";

const USERS_QUERY = gql`
  query UsersQuery {
    users {
      id
      username
      email
    }
  }
`;

export default function HomeScreen() {
  const { data, loading, error } = useQuery(USERS_QUERY);

  const navigation = useNavigation();

  const handleButtonPress = () => {
    navigation.navigate("Profile");
  };

  useEffect(() => {
    console.log(data, loading, error);
  }, [data, loading, error]);

  if (loading) {
    return <AppLoading />;
  }

  const { users } = data;

  return (
    <View style={styles.container}>
      <Text>Homepage</Text>
      <Button title="Go to Profile" onPress={handleButtonPress} />

      {users && (
        <FlatList
          data={users}
          renderItem={({ item }) => (
            <View>
              <Text>
                {item.id} {item.username} {item.email}
              </Text>
            </View>
          )}
          keyExtractor={(user) => user.id.toString()}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
