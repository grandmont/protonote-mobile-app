// import Constants from "expo-constants";
import { ApolloClient, InMemoryCache } from "@apollo/client";

export const cache = new InMemoryCache();

const uri = "https://1230-2804-431-e7de-2d72-1af8-819a-3bdb-a56e.sa.ngrok.io/graphql";

export const client = new ApolloClient({
  uri,
  cache,
  defaultOptions: { watchQuery: { fetchPolicy: "cache-and-network" } },
});
