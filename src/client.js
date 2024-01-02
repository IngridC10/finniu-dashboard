import { ApolloClient, InMemoryCache } from '@apollo/client';


export const client = new ApolloClient({
  uri: 'https://finniu.com/api/v1/graph/finniu/',
  cache: new InMemoryCache()
});

export default client;