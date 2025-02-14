import React from 'react'

function NewTask({data}) {
  return (
    <div className="h-full w-[600px] bg-red-400 rounded-xl flex-shrink-0">
      <div className="flex items-center justify-between">
        <h3 className="bg-red-600 mt-2 ml-2 px-3 py-1 pb-1 pt-1 rounded-xl">
          {data.category}
        </h3>
        <h4 className="mr-3">{data.task_date}</h4>
      </div>
      <h2 className="mt-5 ml-1 text-2xl">{data.task_title} </h2>
      <p className="text-m m-2">
        {data.task_description}
      </p>
      <div className="mt-4">
        <button className="bg-amber-300 rounded m-1 p-1">Accept Task</button>
      </div>
    </div>
  );
}

export default NewTask