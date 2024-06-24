'use client';

import Image from "next/image";
import { useEffect, useState } from "react";
import Todo from "@/components/todo/Todo";
import { gql, useQuery } from "@apollo/client";
import TodoModal from "@/components/todo/TodoModal";

// GraphQL query
const GET_TODOS = gql`
query GetTodos($user_id:UUID!){
  todos(where: {user_id: {_eq: $user_id}}) {
    title
    todo_id
    user_id
    updated_at
    description
  }
}`;

type TodoType = {
  title: string;
  todo_id: string;
  user_id: string;
  updated_at: string;
  description: string;
};

export default function Home() {
  const [Tasks, setTasks] = useState<TodoType[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const { loading, error, data } = useQuery(GET_TODOS, {
    variables: {
      user_id:"bd2b1838-9145-498f-9bec-42e8e77810b6"
    }
  });

  // console.log(data);

  useEffect(() => {
    if (data) setTasks(data.todos); // Correctly set tasks
    if (error) console.log(error);
  }, [data, error]); // Dependencies added

  if (loading) return <h1>loading...</h1>;


  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };


  return (
    <main className="w-full min-h-screen flex flex-col items-center gap-3 px-5 my-auto md:px-20 md:my-10">
      <h3 className="text-left w-full text-[24px] font-semibold leading-[20px] none border-b-2 border-zinc-100 py-5 my-10">
        MY To-Do
      </h3>
      <div className="w-full flex flex-col md:flex-row gap-2 md:gap-5">
      <button className="bg-[#3B40D5] text-zinc-100 text-[14px] px-3 py-2 md:px-5 md:py-3 rounded-md" onClick={handleOpenModal}>+ New Task</button>
        {isOpen && <TodoModal isOpen={isOpen} onClose={handleCloseModal} isUpdate={false}/>}
        <div className="filter-btn flex items-center gap-3 justify-center border-2 rounded-md px-6 py-2 cursor-pointer">
          <svg
            className="w-4 h-4 text-zinc-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
              d="M18.796 4H5.204a1 1 0 0 0-.753 1.659l5.302 6.058a1 1 0 0 1 .247.659v4.874a.5.5 0 0 0 .2.4l3 2.25a.5.5 0 0 0 .8-.4v-7.124a1 1 0 0 1 .247-.659l5.302-6.059c.566-.646.106-1.658-.753-1.658Z"
            />
          </svg>
          <span>Filter</span>
        </div>
        <button className="bg-[#3B40D5] text-zinc-100 text-[14px] px-3 py-2 md:px-5 md:py-3 rounded-md">
          Trash
        </button>
      </div>
      <div className="w-full flex flex-wrap">
        {Tasks?.length ? (
          Tasks.map((todo, i) => (
            <Todo
              key={i}
              data={todo}
              title={todo.title}
              description={todo.description}
            />
          ))
        ) : (
          <h2>No Todo</h2>
        )}
      </div>
    </main>
  );
}
