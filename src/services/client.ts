// import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloClient, ApolloLink, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import AsyncStorage from "@react-native-async-storage/async-storage";

const uri = "https://9a43-2804-431-e7de-9adb-79d6-614e-488e-a348.sa.ngrok.io/graphql";

const httpLink = createHttpLink({ uri });

const withToken = setContext(async () =>{
  const token = await AsyncStorage.getItem('auth')
  return { token }
})

const authMiddleware = new ApolloLink((operation, forward) => {
  const { token } = operation.getContext();

  operation.setContext(() => ({
    headers: {
      Authorization: token ? `Bearer ${token}` : '',
    }
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
