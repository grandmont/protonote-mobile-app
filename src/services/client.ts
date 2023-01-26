import { ApolloClient, InMemoryCache } from "@apollo/client";

export const cache = new InMemoryCache();

const uri = "https://1871-201-42-14-58.sa.ngrok.io/graphql";

export const client = new ApolloClient({
  uri,
  cache,
  defaultOptions: { watchQuery: { fetchPolicy: "cache-and-network" } },
});
