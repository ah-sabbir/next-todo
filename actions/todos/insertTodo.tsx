
import { gql, useQuery, useMutation } from "@apollo/client";


const query = gql`
mutation InsertTask {
  insert_todos_one(object: {title: "this is 3rd task", description: "lorem ipsum", status: "active", user_id: "bd2b1838-9145-498f-9bec-42e8e77810b6"}) {
    todo_id
    title
    description
    status
    user_id
    updated_at
  }
}
`

export async function insertTodo(e:any) {
    e.preventDefault()
    const data = new FormData(e.target);
    console.log(data)
//   const rawFormData = {
//     title: formData.get('title'),
//     description: formData.get('take-a-note'),
//     status: "active",
//     user_id: "bd2b1838-9145-498f-9bec-42e8e77810b6"
//   };

  const [todos] = useMutation(query)
  // Test it out:
  console.log(todos);
}