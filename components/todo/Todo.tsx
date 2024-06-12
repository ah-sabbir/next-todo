'use client'

import Link from 'next/link'
import React from 'react'

const Todo = ({loading, error, data}:any) => {
  return (
    <div className='max-w-[800px] flex flex-wrap items-center justify-center'>
        <Link href={'#'} className=' m-1 p-2 text-left border-2 rounded-md max-w-[300px]'>
            <h2>{data.title || "no title found"}</h2>
            <p>{data.description || "no description found"}</p>
        </Link>
    </div>
  )
}

export default Todo