import { useContext, useEffect, useState } from "react";
import * as AppleAuthentication from "expo-apple-authentication";
import * as Google from "expo-auth-session/providers/google";
import AsyncStorage from "@react-native-async-storage/async-storage";
import NetInfo from "@react-native-community/netinfo";
import { useMutation } from "@apollo/client";

import useAPISync from "@hooks/useAPISync";
import { AuthContext } from "@contexts/Auth";
import { AuthenticateDocument, AuthProvider, User } from "@graphql/generated";
import { db } from "@services/database";
import { ProtoModel } from "@database/models/ProtoModel";
import {
  IS_EXPO_GO,
  IOS_CLIENT_ID,
  ANDROID_CLIENT_ID,
  EXPO_CLIENT_ID,
} from "@config/constants";

export default function useAuth() {
  const [isLoading, setIsLoading] = useState(true);

  const { state, setAuth, setUserInfo } = useContext(AuthContext);

  const { auth, userInfo } = state;

  const [authenticateMutation] = useMutation(AuthenticateDocument);

  const { storeUserData } = useAPISync();

  const [, response, promptAsync] = Google.useAuthRequest({
    androidClientId: ANDROID_CLIENT_ID,
    iosClientId: IOS_CLIENT_ID,
    expoClientId: EXPO_CLIENT_ID,
  });

  const persistAuth = async (accessToken: string, provider: AuthProvider) => {
    const { data, errors } = await authenticateMutation({
      variables: {
        input: {
          accessToken,
          user: accessToken,
          provider,
        },
      },
    });

    if (!data) {
      // Deal with API error
      console.log(errors);
      return;
    }

    const { access_token, user } = data.authenticate;

    await AsyncStorage.setItem("auth", access_token);
    await AsyncStorage.setItem("user", JSON.stringify(user));

    await storeUserData(user);

    setAuth(access_token);
    setUserInfo(user as User);
    setIsLoading(false);
  };

  useEffect(() => {
    if (!response) return;

    if (["cancel", "dismiss", "error"].includes(response.type)) {
      setIsLoading(false);
    }

    if (response.type === "success") {
      persistAuth(response.authentication.accessToken, AuthProvider.Google);
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
      setIsLoading(false);
    };

    getStorageValues();
  }, []);

  const clearStorage = async () => {
    await AsyncStorage.multiRemove(["auth", "user"]);
    setAuth(null);
    setUserInfo(null);
    await db.manager.clear(ProtoModel);
  };

  const signInGoogle = async () => {
    await promptAsync({ useProxy: IS_EXPO_GO, showInRecents: true });
  };

  const signInApple = async () => {
    try {
      const credential = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
          AppleAuthentication.AppleAuthenticationScope.EMAIL,
        ],
      });

      persistAuth(credential.user, AuthProvider.Apple);
      // signed in
    } catch (e) {
      setIsLoading(false);
      if (e.code === "ERR_REQUEST_CANCELED") {
        // handle that the user canceled the sign-in flow
      } else {
        // handle other errors
      }
    }
  };

  const login = async (provider: AuthProvider) => {
    setIsLoading(true);

    const signInWithProvider = {
      [AuthProvider.Google]: signInGoogle,
      [AuthProvider.Apple]: signInApple,
    }[provider];

    return await signInWithProvider();
  };

  const logout = async () => {
    await new Promise((resolve, reject) => {
      NetInfo.fetch()
        .then((state) => {
          if (state.isConnected) {
            clearStorage();
            setIsLoading(false);
            return resolve(true);
          }

          return reject();
        })
        .catch(() => {
          return reject();
        });
    });
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
