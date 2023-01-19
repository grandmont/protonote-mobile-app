import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import { useQuery } from "@apollo/client";
import { useNavigation } from "@react-navigation/native";
import { UsersQueryDocument } from "../graphql/generated";

export default function HomeScreen() {
  const { data, loading, error } = useQuery(UsersQueryDocument);

  const navigation = useNavigation();

  const handleButtonPress = () => {
    navigation.navigate("Profile");
  };

  if (loading) {
    // Handle loading
    return null;
  }

  if (error) {
    // Handle error
    return null;
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
