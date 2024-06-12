import { insertTodo } from '@/actions/todos/insertTodo';
import React from 'react'




import { gql, useQuery, useMutation } from "@apollo/client";


const query = gql`
mutation insert_todos_one($object: todos_insert_input!) {
  insert_todos_one(object: $object) {
    created_at
    description
    status
    title
    todo_id
    updated_at
    user_id
  }
}

`
//"bd2b1838-9145-498f-9bec-42e8e77810b6"


const TodoModal = () => {

    const [title, setTitle] = React.useState('');
    const [content, setContent] = React.useState('');
  
    const [insert_todos_one, { loading, error }] = useMutation(query);
  
    const handleSubmit =  (e:any) => {
      e.preventDefault();
      insert_todos_one({ variables: { object:{ title: "my title", description: "my description", status: "active", user_id: "bd2b1838-9145-498f-9bec-42e8e77810b6" } } }) //
        .then((response) => {
          console.log(response.data);
          // Handle successful mutation
        })
        .catch((error) => {
          console.error(error);
          // Handle error
        });
    };



  return (
        <div id="default-modal" tabIndex={-1} aria-hidden="true" className="block bg-transparent bg-zinc-600/50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div className="relative p-4 w-full max-w-2xl max-h-full">
            <form onSubmit={handleSubmit} className=" w-[600px] bg-zinc-100 px-3 py-2 mb-8 shadow rounded text-gray-600">
                <div className="top flex justify-between items-center mb-3">
                    <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    className="bg-transparent w-full px-2 font-semibold outline-none"
                    value={title}
                    onChange={(e)=> setTitle(e.target.value)}
                    />
                </div>
                <div className="middle flex justify-between items-center">
                    <textarea
                    name="take-a-note"
                    placeholder="Take a note..."
                    className="bg-transparent px-2 w-full outline-none resize-none font-medium h-24 mb-2"
                    spellCheck="false"
                    value={content}
                    onChange={(e)=> setContent(e.target.value)}
                    ></textarea>
                </div>
                <div className="bottom extras flex items-center text-gray-800 mt-3">
                    <div className="left relative z-50">
                    <div className="extra-options flex-1 flex items-center">
                        <button className="text-sm submit-btn">submit</button>
                    </div>
                    </div>
                    <div className="right flex-1 flex items-center justify-end">
                    <button className="text-sm close-btn">Close</button>
                    </div>
                </div>
                </form>
            </div>
        </div>
  )
}

export default TodoModal;