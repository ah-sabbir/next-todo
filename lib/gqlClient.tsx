import { GraphQLClient } from "graphql-request";


export const graphqlClient = new GraphQLClient(process.env.NEXT_PUBLIC_HASURA_URL as string, {
    method: 'POST',
    headers:{
        'x-hasura-admin-secret': process.env.NEXT_PUBLIC_HASURA_ADMIN_SECRET as string
    },
} )