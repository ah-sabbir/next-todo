import { HttpLink, InMemoryCache, ApolloClient } from "@apollo/client";

export const Client =  new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: "https://oriented-hare-89.hasura.app/v1/graphql",
      headers: {
        'x-hasura-admin-secret': `PqqUqNUH7gsH5aKf746EvtKTZzB7jKwXckzLy0L7cDGuE44AXSlxN1qZ8h3pfpfI`,
      }
    }),
  });


// const client = new ApolloClient({
//   uri: 'https://oriented-hare-89.hasura.app/v1/graphql',
//   cache: new InMemoryCache(),
// });



// import {
//   ApolloClient,
//   createHttpLink,
//   HttpLink,
//   InMemoryCache
// } from '@apollo/client';

// const client = new ApolloClient({
//   ssrMode: true,
//   link: new HttpLink({
//     uri: 'http://localhost:3010',
//     context: {
//       headers: {
//         'x-hasura-admin-secret': `PqqUqNUH7gsH5aKf746EvtKTZzB7jKwXckzLy0L7cDGuE44AXSlxN1qZ8h3pfpfI`,
//       },
//     },
//   }),
//   cache: new InMemoryCache(),
// });