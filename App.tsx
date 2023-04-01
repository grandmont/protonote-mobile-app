import "react-native-gesture-handler";
import "reflect-metadata";
import { useState, useEffect } from "react";
import { LogBox } from "react-native";
import { ApolloProvider } from "@apollo/client";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistCache } from "apollo3-cache-persist";
import mobileAds from "react-native-google-mobile-ads";

import "@styles";
import { cache, client } from "@services/client";
import { db } from "@services/database";
import AuthProvider from "@contexts/Auth";
import RootNavigator from "@navigators/RootNavigator";

LogBox.ignoreLogs([
  "Sending `onAnimatedValueUpdate` with no listeners registered.",
]);

export default function App() {
  const [loadingCache, setLoadingCache] = useState(true);

  const init = async () => {
    if (!db.isInitialized) {
      await db.initialize();
    }

    mobileAds().initialize();

    persistCache({
      cache,
      storage: AsyncStorage,
    }).then(() => setLoadingCache(false));
  };

  useEffect(() => {
    init();
  }, []);

  if (loadingCache) {
    return null;
  }

  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <RootNavigator />
      </AuthProvider>
    </ApolloProvider>
  );
}
