import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Button } from "react-native";

import useAuth from "../hooks/useAuth";

export default function AuthScreen() {
  const { request, login } = useAuth();

  return (
    <View style={styles.container}>
      <Button disabled={!request} title="Login" onPress={login} />
      <StatusBar style="auto" />
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
