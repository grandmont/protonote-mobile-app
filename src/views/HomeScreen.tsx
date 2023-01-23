import { StyleSheet, Text, View, Image, Button, FlatList } from "react-native";
import { useQuery } from "@apollo/client";
import { useNavigation } from "@react-navigation/native";

import { UsersQueryDocument } from "../graphql/generated";
import useAuth from "../hooks/useAuth";

export default function HomeScreen() {
  const { userInfo, logout } = useAuth();
  const { data, loading, error } = useQuery(UsersQueryDocument);

  const navigation = useNavigation();

  const handleGoToProfile = () => {
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
      <Button title="Go to Profile" onPress={handleGoToProfile} />
      {userInfo && (
        <View style={styles.userInfo}>
          <Image source={{ uri: userInfo.picture }} style={styles.profilePic} />
          <Text>Welcome {userInfo.name}</Text>
          <Text>{userInfo.email}</Text>
        </View>
      )}

      <Button title="Logout" onPress={logout} />

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
  profilePic: {
    width: 50,
    height: 50,
  },
  userInfo: {
    alignItems: "center",
    justifyContent: "center",
  },
});
