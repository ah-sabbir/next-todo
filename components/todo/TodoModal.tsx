import React from 'react'

const TodoModal = (event:React.AllHTMLAttributes<Event>) => {
    const e = event;
    console.log(e);
  return (
        <div id="default-modal" tabIndex={-1} aria-hidden="true" className="block overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div className="relative p-4 w-full max-w-2xl max-h-full">
                {/* <!-- Modal content --> */}
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <form action="/" method="post">
                        <label>title</label>
                        <input type="text" name="title" value="default" />
                        <label>body</label>
                        <input type="text"/>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default TodoModal;