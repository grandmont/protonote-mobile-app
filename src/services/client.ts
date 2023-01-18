// import Constants from "expo-constants";
import { ApolloClient, InMemoryCache } from "@apollo/client";

export const cache = new InMemoryCache();

const uri = "http://192.168.15.6:4000/graphql";

export const client = new ApolloClient({
  uri,
  cache,
  defaultOptions: { watchQuery: { fetchPolicy: "cache-and-network" } },
});
