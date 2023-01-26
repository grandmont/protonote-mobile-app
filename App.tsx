import "react-native-gesture-handler";
import { useState, useEffect } from "react";
import { ApolloProvider } from "@apollo/client";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistCache } from "apollo3-cache-persist";

import "./src/styles";
import { cache, client } from "./src/services/client";
import AuthProvider from "./src/contexts/Auth";
import RootNavigator from "./src/navigators/RootNavigator";

export default function App() {
  const [loadingCache, setLoadingCache] = useState(true);

  useEffect(() => {
    persistCache({
      cache,
      storage: AsyncStorage,
    }).then(() => setLoadingCache(false));
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
