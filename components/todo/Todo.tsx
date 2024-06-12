'use client'

import { gql, useMutation } from '@apollo/client';
import Link from 'next/link'
import React, { useState } from 'react'


const DateFormated = (dateString:string)=>{
  const date = new Date(dateString);
  const options:any = {  
    year: 'numeric',   
    month: 'long',     
    day: 'numeric',   
    timeZone: 'UTC'    
  };
  return date.toLocaleDateString('en-US', options);
}


const query = gql`
mutation DeleteTask($todo_id: uuid!, $user_id: uuid!) {
  delete_todos(where: {_and: {user_id: {_eq: $user_id}, todo_id: {_eq: $todo_id}}}) {
    affected_rows
    returning {
      status
    }
  }
}`


const Todo = ({data}:any) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseHover = () => {
    setIsHovering(!isHovering);
}

const [DeleteTask, { loading, error }] = useMutation(query, {
  context: {
    headers: {
      'x-hasura-admin-secret': `PqqUqNUH7gsH5aKf746EvtKTZzB7jKwXckzLy0L7cDGuE44AXSlxN1qZ8h3pfpfI`,
    },
  },
});

const TodoDeleteHandler = (todo_id:string)=>{
  DeleteTask({ variables: {  todo_id: todo_id, user_id: "bd2b1838-9145-498f-9bec-42e8e77810b6" } } ) //
  .then((response) => {
    console.log(response.data);
    alert(`${todo_id} has been deleted!`)
    // Handle successful mutation
  })
  .catch((error) => {
    console.error(error.message);
    // Handle error
  });
}


// console.log(data)

  return (
    <div 
      onMouseEnter={handleMouseHover}
      onMouseLeave={handleMouseHover}
      className=' relative w-full md:w-1/5 min-w-[300px] flex  justify-center'>
        <Link href={'#'} 
          className='w-full m-1 p-2 text-left border-2 rounded-md'>
            <h3 className='py-3 font-semibold capitalize'>{data.title || "no title found"}</h3>
            <p className='py-3'>{data.description || "no description found"}</p>
            <p className='py-2'>{DateFormated(data.updated_at)}</p>
        </Link>
        {isHovering && <span className='absolute right-5 top-5 cursor-pointer' onClick={()=>TodoDeleteHandler(data.todo_id)}>X</span>}
    </div>
  )
}

export default Todo


// tab-size: 4;
// font-family: var(--nunito-sans);
// border-color: rgba(229,231,235,var(--tw-border-opacity));
// padding: 0;
// box-sizing: border-box;
// margin: 0;
// padding-left: .75rem;
// padding-right: .75rem;
// padding-top: .75rem;
// font-size: 1.125rem;
// line-height: 1.75rem;
// font-weight: 600;