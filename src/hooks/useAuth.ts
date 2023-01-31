import { useContext, useEffect, useState } from "react";
import Constants from "expo-constants";
import * as Google from "expo-auth-session/providers/google";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useMutation } from "@apollo/client";

import { AuthContext } from "../contexts/Auth";
import { AuthenticateDocument, User } from "../graphql/generated";

const IS_EXPO_GO = Constants.appOwnership === "expo";

const IOS_CLIENT_ID =
  "227660563070-h19lq8ol7al1ce7dushbagjegmjrl5uo.apps.googleusercontent.com";
const ANDROID_CLIENT_ID =
  "227660563070-4qpakk8mclftj2vjlkie32c22tvog4nn.apps.googleusercontent.com";
const EXPO_CLIENT_ID =
  "227660563070-bppokg502t6sphrb9go3omjpahdjp3du.apps.googleusercontent.com";

export default function useAuth() {
  const [isLoading, setIsLoading] = useState(false);

  const { state, setAuth, setUserInfo } = useContext(AuthContext);

  const { auth, userInfo } = state;

  const [authenticateMutation] = useMutation(AuthenticateDocument);

  const [, response, promptAsync] = Google.useAuthRequest({
    androidClientId: ANDROID_CLIENT_ID,
    iosClientId: IOS_CLIENT_ID,
    expoClientId: EXPO_CLIENT_ID,
  });

  // Save response to storage
  useEffect(() => {
    if (!response) return;

    if (["cancel", "dismiss", "error"].includes(response.type)) {
      setIsLoading(false);
    }

    if (response.type === "success") {
      const persistAuth = async () => {
        const { accessToken } = response.authentication;

        console.log("accessToken:", accessToken)

        const { data } = await authenticateMutation({
          variables: {
            input: {
              accessToken,
            },
          },
        });

        if (!data) {
          // Deal with API error
          return;
        }

        const { access_token, user } = data.authenticate;

        await AsyncStorage.setItem("auth", access_token);
        await AsyncStorage.setItem("user", JSON.stringify(user));

        setAuth(access_token);
        setUserInfo(user as User);
        setIsLoading(false)
      };

      persistAuth();
    }
  }, [response]);

  // Mount
  useEffect(() => {
    const getStorageValues = async () => {
      const accessToken = await AsyncStorage.getItem("auth");
      const user = await AsyncStorage.getItem("user");

      if (!accessToken || !user) {
        return logout();
      }

      setAuth(accessToken);
      setUserInfo(JSON.parse(user));
    };

    getStorageValues();
  }, []);

  const clearStorage = async () => {
    await AsyncStorage.removeItem("auth");
    await AsyncStorage.removeItem("user");
    setAuth(null);
    setUserInfo(null);
  };

  const login = async () => {
    setIsLoading(true);
    await promptAsync({ useProxy: IS_EXPO_GO, showInRecents: true });
  };

  const logout = async () => {
    clearStorage();
  };

  return {
    isLoggedIn: !!auth,
    isLoading,
    accessToken: auth || "",
    userInfo,
    login,
    logout,
  };
}
