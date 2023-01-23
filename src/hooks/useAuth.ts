import { useEffect, useState } from "react";
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

type AuthType = {
  accessToken: string;
};

type UserInfoType = {
  name: string;
  email: string;
  picture: string;
};

export default function useAuth() {
  const [userInfo, setUserInfo] = useState<UserInfoType | null>(null);
  const [auth, setAuth] = useState<AuthType | null>(null);

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: ANDROID_CLIENT_ID,
    iosClientId: IOS_CLIENT_ID,
    expoClientId: EXPO_CLIENT_ID,
  });

  const getUserData = async () => {
    const userInfoResponse = await fetch(
      "https://www.googleapis.com/userinfo/v2/me",
      {
        headers: {
          Authorization: `Bearer ${auth.accessToken}`,
        },
      }
    );

    userInfoResponse.json().then((data) => {
      setUserInfo(data);
    });
  };

  // Save response to storage
  useEffect(() => {
    if (response?.type === "success") {
      const persistAuth = async () => {
        await AsyncStorage.setItem(
          "auth",
          JSON.stringify(response.authentication)
        );
        setAuth(response.authentication);
      };

      persistAuth();
    }
  }, [response]);

  // Mount
  useEffect(() => {
    const getPersistedAuth = async () => {
      const jsonValue = await AsyncStorage.getItem("auth");

      console.log("77:", jsonValue);
      console.log("78:", auth);

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

    // Get user data if auth exists
    getUserData();
  }, [auth]);

  const clear = async () => {
    await AsyncStorage.removeItem("auth");
    setAuth(null);
    setUserInfo(null);
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

    clear();
  };

  const isLoggedIn = !!auth;

  console.log(isLoggedIn)

  return {
    isLoggedIn,
    userInfo,
    request,
    login,
    logout,
  };
}
