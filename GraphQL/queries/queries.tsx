import { useQuery, gql, useMutation } from "@apollo/client";


const GET_TODOS = gql`
query tasks {
  todos(order_by: {created_at: asc}) {
    title
    description
    status
    todo_id
    user_id
    updated_at
    created_at
  }
}
`;

export default {
    GET_TODOS
}



// mutation InsertUser($username: String!, $email: String!, $password: String!) {
//     insert_users_one(object: {username: $username, email: $email, password_hash: $password}) {
//       user_id
//       email
//       username
//       updated_at
//     }
//   }
  
// mutation DeleteUser {
// delete_users(where: {user_id: {_eq: "c171bcc4-e9c6-46a7-a897-5aea322caaa7"}}) {
//     affected_rows
// }
// }

// query GetUsers {
// users {
//     user_id
//     username
//     email
// }
// }

// mutation InsertTask {
// insert_todos_one(object: {title: "this is 3rd task", description: "lorem ipsum", status: "active", user_id: "c171bcc4-e9c6-46a7-a897-5aea322caaa7"}) {
//     todo_id
//     title
//     description
//     status
//     user_id
//     updated_at
// }
// }

// query tasks {
// todos(order_by: {created_at: asc}) {
//     title
//     description
//     status
//     todo_id
//     user_id
//     updated_at
//     created_at
// }
// }

// mutation DeleteTask($todo_id: uuid!, $user_id: uuid!) {
// delete_todos(where: {_and: {user_id: {_eq: $user_id}, todo_id: {_eq: $todo_id}}}) {
//     affected_rows
//     returning {
//     status
//     }
// }
// }
  