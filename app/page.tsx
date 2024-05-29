import React, { Suspense } from "react"
import TodoList from "./(user)/todos/TodoList"

export default function Home() {
  return (
   <>
    <Suspense fallback={<p className="text-red-500">Loading the Todos...</p>}>
      <h1>Loading Todos</h1>
    <div className="flex space-x-2">
      <TodoList />
    </div>
    </Suspense>

    <Suspense fallback={<p className="text-blue-500">Loading Shopping item...</p>}>
      <h1>Loading Todos</h1>
    <div className="flex space-x-2">
      <TodoList />
    </div>
    </Suspense>

   </>
  )
}
