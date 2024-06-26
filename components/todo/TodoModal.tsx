import { insertTodo } from '@/actions/todos/insertTodo';
import React, { useState } from 'react'




import { gql, useQuery, useMutation } from "@apollo/client";


const query = gql`
mutation InsertTask($object: todos_insert_input!) {
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


const TodoModal = ({onClose, isOpen, isUpdate}:any) => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [close, setClose] = useState(1);
  
    const [InsertTask, { loading, error }] = useMutation(query, {
      context: {
        headers: {
          'x-hasura-admin-secret': `PqqUqNUH7gsH5aKf746EvtKTZzB7jKwXckzLy0L7cDGuE44AXSlxN1qZ8h3pfpfI`,
        },
      },
    });
  
    const handleSubmit =  (e:any) => {
      e.preventDefault();
      if(content!==''){
        InsertTask({ variables: { object:{ title: title, description: content, status: "active", user_id: "bd2b1838-9145-498f-9bec-42e8e77810b6" } } }) //
          .then((response) => {
            // console.log(response.data);
            // Handle successful mutation
            onClose();
          })
          .catch((error) => {
            console.error(error.message);
            // Handle error
          });
      }

      onClose();
    };



  return (
        <div id="default-modal" tabIndex={-1} aria-hidden="true" className={`${isOpen ? 'block': 'hidden'} bg-transparent bg-zinc-600/50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}>
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
                    <button className="text-sm close-btn" onClick={onClose}>Close</button>
                    </div>
                </div>
                </form>
            </div>
        </div>
  )
}

export default TodoModal;