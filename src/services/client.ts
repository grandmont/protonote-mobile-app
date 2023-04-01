import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { API_URL } from "@config/constants";

const uri = `${API_URL}/graphql`;

const httpLink = createHttpLink({ uri });

const withToken = setContext(async () => {
  const token = await AsyncStorage.getItem("auth");
  return { token };
});

const authMiddleware = new ApolloLink((operation, forward) => {
  const { token } = operation.getContext();

  operation.setContext(() => ({
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
  }));

  return forward(operation);
});

const link = ApolloLink.from([withToken, authMiddleware.concat(httpLink)]);

export const cache = new InMemoryCache();

export const client = new ApolloClient({
  link,
  cache,
  defaultOptions: { watchQuery: { fetchPolicy: "cache-and-network" } },
});
