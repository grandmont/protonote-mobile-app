// import Constants from "expo-constants";
import { ApolloClient, InMemoryCache } from "@apollo/client";

export const cache = new InMemoryCache();

const uri = "https://bd05-2804-431-e7de-9adb-2241-3a22-627d-356e.sa.ngrok.io/graphql";

export const client = new ApolloClient({
  uri,
  cache,
  defaultOptions: { watchQuery: { fetchPolicy: "cache-and-network" } },
});
