import React from 'react'
import { Todo } from '@/typing';
import { notFound } from 'next/navigation';

type TodoType = {
    params: {
        todoId: string;
    };
};
const fetchTodo = async (todoId: string) => {
    const res = await fetch (`https://jsonplaceholder.typicode.com/todos/${todoId}`, 
    { next: {revalidate: 60} }
    );
    
    const todo: Todo = await res.json();
    return todo;
}
async function TodosPage({ params: {todoId} } : TodoType) {
    const todo = await fetchTodo(todoId);

    if(!todo.id) return notFound();

  return (
    <div className='p-10 bg-yellow-200 border-2 m-2 shadow-lg'>
        <p>
            #{todo.id}: {todo.title}
        </p>
        <p>Complete: {todo.completed ? "Yes" : "No"}</p>
        <p className='border-t border-black mt-5 text-right'>By User: {todo.userID}</p>
    </div>
  )
}

export default TodosPage;

export async function generateStaticParams() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
    const todos: Todo[] = await res.json();

    const trimmedTodos = todos.splice(0,10)

    return todos.map(todo=> ({
        todoId: todo.id.toString(),
    }))
}