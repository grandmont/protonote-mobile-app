import { ApolloClient, InMemoryCache } from "@apollo/client";

export const cache = new InMemoryCache();

const uri = "https://9a43-2804-431-e7de-9adb-79d6-614e-488e-a348.sa.ngrok.io/graphql";

export const client = new ApolloClient({
  uri,
  cache,
  defaultOptions: { watchQuery: { fetchPolicy: "cache-and-network" } },
});
