'use client'
import getTasks from "@/lib/getTasks";
import Image from "next/image";
import { useEffect, useState } from "react";

import jsondata from '@/lib/sampleData.json';


interface parseInterface {
  id: Number,
  task: String,
  draft: Boolean,
  completed: Boolean,
  category: String,
  sentToTrash: Boolean,
  updatedDate: Date
}



export default function Home() {

  const [isSelected, setIsSelected] = useState(false);
  const [select, setSelect] = useState(false);
  const [counter, setCounter] = useState(Number);
  const [resdata, setResData] = useState([])

  function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${month}/${date}/${year}`;
  }

  const CheckBoxChangeHandler = (e:React.ChangeEvent<HTMLInputElement>)=>{
    if( e.target.checked ){
      setCounter(counter + 1)
      setIsSelected(!isSelected)
    }else{
      setCounter(counter - 1)
      setIsSelected(!isSelected)
    }
    
  }


  return (
    <main className="w-full min-h-screen flex flex-col items-center gap-3 px-5 my-auto md:px-20 md:my-10">
      <h3 className="text-left w-full text-[24px] font-semibold leading-[20px]none border-b-2 border-zinc-100 py-5 my-10">MY To-Do</h3>
      <div className="w-full flex gap-5">
        <button className="bg-[#3B40D5] text-zinc-100 px-5 py-3 rounded-md">+ New Task</button>
        <div className="filter-btn flex items-center gap-3 justify-center border-2 rounded-md px-6 cursor-pointer">
          <svg className="w-4 h-4 text-zinc-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M18.796 4H5.204a1 1 0 0 0-.753 1.659l5.302 6.058a1 1 0 0 1 .247.659v4.874a.5.5 0 0 0 .2.4l3 2.25a.5.5 0 0 0 .8-.4v-7.124a1 1 0 0 1 .247-.659l5.302-6.059c.566-.646.106-1.658-.753-1.658Z"/>
          </svg>
          <span>Filter</span>
        </div>
        <button className="bg-[#3B40D5] text-zinc-100 px-5 py-3 rounded-md capitalize" onClick={()=>setSelect(!select)}>{counter || ""} select multiple</button>
      </div>
      <ol className="w-full">
      {
        jsondata && jsondata.map((data,i)=>(
          <li key={i} className="py-2">
            <div className={`w-full flex flex-row items-center justify-between p-4 ${isSelected && 'text-green-700 border border-green-300 rounded-lg bg-green-50'} border-2 border-zinc-200 rounded-md drop-shadow-xl`}>
                <div>
                    <div className="flex items-center justify-between">
                        <span className="sr-only">User info</span>
                        <h3 className="font-medium">{data.id}. {data.task}</h3>
                        {
                          isSelected && (
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                            </svg>
                          )
                        }
                    </div>
                    <div className="date flex gap-1 text-[14px] text-zinc-500 pt-2 items-center">
                      <svg className="w-6 h-6 text-zinc-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 10h16M8 14h8m-4-7V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"/>
                      </svg>
                      {getDate()}
                  </div>
                </div>
                {
                  select && <input type="checkbox" id={data.task} name="vehicle1" value={data.task} onChange={CheckBoxChangeHandler} onClick={()=>setCounter(counter+1)}/>
                }
                {
                  !select && <button>delete</button>
                }
            </div>
          </li>
        ))
      }
      </ol>
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