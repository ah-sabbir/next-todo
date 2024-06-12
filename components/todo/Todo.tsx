'use client'

import Link from 'next/link'
import React from 'react'

const Todo = ({loading, error, data}:any) => {
  return (
    <div className=' min-w-[300px] flex items-center justify-center'>
        <Link href={'#'} className='w-full m-1 p-2 text-left border-2 rounded-md'>
            <h2>{data.title || "no title found"}</h2>
            <p>{data.description || "no description found"}</p>
        </Link>
    </div>
  )
}

export default Todo