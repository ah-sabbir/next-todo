'use client'

import Image from "next/image";
import { useEffect, useState } from "react";
//import { ApolloClient, useQuery, gql, useMutation, InMemoryCache } from "@apollo/client";
import Todo from "@/components/todo/Todo";
// import GET_TODOS from "@/GraphQL/queries/queries";
import { useAuthQuery } from "@nhost/react-apollo";
import { nhost } from "@/lib/nhost";
import { NhostProvider } from "@nhost/nextjs";

import { gql, useQuery } from "@apollo/client";
import { Client } from "@/lib/client";
import { cookies } from "next/headers";


import {
  useAuthenticated,
  useSignInEmailPassword,
  useSignOut,
} from "@nhost/nextjs";

import { graphqlClient } from "@/lib/gqlClient";


const GET_TODOS = gql`
query GetTodos {
  todos(where: {user_id: {_eq: "bd2b1838-9145-498f-9bec-42e8e77810b6"}}) {
    title
    todo_id
    user_id
    updated_at
    description
  }
}
`

function App() {
  return (
    <NhostProvider nhost={nhost}>
      <Home />
    </NhostProvider>
  );
}



// async function get_todos(){

//   const {data, error} = await useQuery(GET_TODOS)
//   // const { data } = await client.query({
//   //   query: GET_TODOS,
//   // })
//   console.log(data)
//   return data;
// }


// const Client = new ApolloClient({
//   url: ""
// })


export default function Home() {
  // const [loading, setLoading] = useState(true);
  // const [todo, setTodo] = useState();

  const { data, loading } = useQuery(GET_TODOS, {
    context: {
      headers: {
        'x-hasura-admin-secret': `PqqUqNUH7gsH5aKf746EvtKTZzB7jKwXckzLy0L7cDGuE44AXSlxN1qZ8h3pfpfI`,
      },
    },
  });

  if (loading) {
    return <div>loading.....</div>;
  }


    // setTodo(data?.todos)
    console.log(data.todos);



  // useEffect(()=>{
  //   async function fetchTodo() {
  //     setLoading(true);
  //   // const { data, error } = await nhost.graphql.request(GET_TODOS);
  //   const data = await fetch(process.env.NEXT_PUBLIC_HASURA_URL as string, {
  //     method: 'post',
  //     headers: {
  //       'x-hasura-admin-secret': process.env.NEXT_PUBLIC_HASURA_ADMIN_SECRET as string
  //     },
  //     body: JSON.stringify(GET_TODOS)
  //   }).then(d=> console.log(d))
    
  //   // graphqlClient.request(GET_TODOS)
    
  //   console.log(data)
  //   // setData(data);
  //   setLoading(false);
  // }

  // fetchTodo();
  // },[])

  return (
    <main className="w-full min-h-screen flex flex-col items-center gap-3 px-5 my-auto md:px-20 md:my-10">
      <h3 className="text-left w-full text-[24px] font-semibold leading-[20px]none border-b-2 border-zinc-100 py-5 my-10">MY To-Do</h3>
      <div className="w-full flex flex-col md:flex-row gap-2 md:gap-5">
        <button className="bg-[#3B40D5] text-zinc-100 text-[14px] px-3 py-2 md:px-5 md:py-3 rounded-md">+ New Task</button>
        {/* <TodoModal /> */}
        <div className="filter-btn flex items-center gap-3 justify-center border-2 rounded-md px-6 py-2 cursor-pointer">
          <svg className="w-4 h-4 text-zinc-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M18.796 4H5.204a1 1 0 0 0-.753 1.659l5.302 6.058a1 1 0 0 1 .247.659v4.874a.5.5 0 0 0 .2.4l3 2.25a.5.5 0 0 0 .8-.4v-7.124a1 1 0 0 1 .247-.659l5.302-6.059c.566-.646.106-1.658-.753-1.658Z"/>
          </svg>
          <span>Filter</span>
        </div>
        <button className="bg-[#3B40D5] text-zinc-100 text-[14px] px-3 py-2 md:px-5 md:py-3 rounded-md" > select multiple</button>
      </div>
        <div className="w-full flex flex-nowrap">
          {
            data.todos && data.todos.map((todo:any, i:any)=>(
              <Todo key={i} data = {todo} title="this is title" description="lorem ipsum lorem ipsum"/>
            ))|| (
              <h2>No Todo</h2>
            )
          }
        </div>
    </main>
  );
}








{/* <div key={i} className="task-box w-full p-5 border-2 border-zinc-200 rounded-md drop-shadow-xl">
<div className="task-heading">
  <h2 className="task-title text-[18px] capitalize">hello task {x}</h2>
  
</div>
<div className="date flex gap-1 text-[14px] text-zinc-500 pt-2 items-center">
  <svg className="w-6 h-6 text-zinc-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 10h16M8 14h8m-4-7V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"/>
  </svg>
  {getDate()}
</div>
</div> */}