import { useEffect, useState, useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Button, Platform } from "react-native";
import Constants from "expo-constants";
import * as Google from "expo-auth-session/providers/google";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as AuthSession from "expo-auth-session";

const IS_EXPO_GO = Constants.appOwnership === "expo";

const IOS_CLIENT_ID =
  "227660563070-h19lq8ol7al1ce7dushbagjegmjrl5uo.apps.googleusercontent.com";
const ANDROID_CLIENT_ID =
  "227660563070-4qpakk8mclftj2vjlkie32c22tvog4nn.apps.googleusercontent.com";
const EXPO_CLIENT_ID =
  "227660563070-bppokg502t6sphrb9go3omjpahdjp3du.apps.googleusercontent.com";

export default function InitialScreen() {
  const [userInfo, setUserInfo] = useState();
  const [auth, setAuth] = useState();

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: ANDROID_CLIENT_ID,
    iosClientId: IOS_CLIENT_ID,
    expoClientId: EXPO_CLIENT_ID,
  });

  const getUserData = useCallback(async () => {
    if (!auth) return;

    let userInfoResponse = await fetch(
      "https://www.googleapis.com/userinfo/v2/me",
      {
        headers: {
          Authorization: `Bearer ${auth.accessToken}`,
        },
      }
    );

    userInfoResponse.json().then((data) => {
      console.log(data);
      setUserInfo(data);
    });
  }, [auth]);

  useEffect(() => {
    console.log(response);
    if (response?.type === "success") {
      setAuth(response.authentication);

      const persistAuth = async () => {
        await AsyncStorage.setItem(
          "auth",
          JSON.stringify(response.authentication)
        );
      };

      persistAuth();
      getUserData();
    }
  }, [response]);

  useEffect(() => {
    const getPersistedAuth = async () => {
      const jsonValue = await AsyncStorage.getItem("auth");

      console.log("auth:", jsonValue);

      if (jsonValue != null) {
        const authFromJson = JSON.parse(jsonValue);
        setAuth(authFromJson);
      }
    };

    getPersistedAuth();
  }, []);

  // Load user data if auth exists
  useEffect(() => {
    if (!auth) return;
    getUserData();
  }, [auth, getUserData]);

  const getClientId = () => {
    if (Platform.OS === "ios") {
      return IOS_CLIENT_ID;
    } else if (Platform.OS === "android") {
      return ANDROID_CLIENT_ID;
    } else {
      console.log("Invalid platform - not handled");
      return null;
    }
  };

  const login = async () => {
    await promptAsync({ useProxy: IS_EXPO_GO, showInRecents: true });
  };

  const logout = async () => {
    await AuthSession.revokeAsync(
      {
        token: auth.accessToken,
      },
      {
        revocationEndpoint: "https://oauth2.googleapis.com/revoke",
      }
    );

    setAuth(undefined);
    setUserInfo(undefined);
    await AsyncStorage.removeItem("auth");
  };

  return (
    <View style={styles.container}>
      {userInfo && (
        <View style={styles.userInfo}>
          <Image source={{ uri: userInfo.picture }} style={styles.profilePic} />
          <Text>Welcome {userInfo.name}</Text>
          <Text>{userInfo.email}</Text>
        </View>
      )}

      {!auth && <Button disabled={!request} title="Login" onPress={login} />}
      {auth && <Button title="Logout" onPress={logout} />}
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
  profilePic: {
    width: 50,
    height: 50,
  },
  userInfo: {
    alignItems: "center",
    justifyContent: "center",
  },
});
