import { HttpLink, InMemoryCache, ApolloClient } from "@apollo/client";

export const Client =  new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: "https://oriented-hare-89.hasura.app/v1/graphql",
    }),
  });


// const client = new ApolloClient({
//   uri: 'https://oriented-hare-89.hasura.app/v1/graphql',
//   cache: new InMemoryCache(),
// });