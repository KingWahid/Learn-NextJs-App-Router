import { Todo } from '@/typing';
import React from 'react'
import Link from 'next/link';

const fetchTodos = async () => {
    const timeout = Math.floor(Math.random() * 5 + 1) * 1000;
    await new Promise((resolve) => setTimeout(resolve, timeout));

    const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
    const todos: Todo[] = await res.json();
    return todos;
}

const TodoList = async () => {
    const todos = await fetchTodos();
  return (
    <>
     {todos.map(todo => (
        <p key={todo.id}>
            <Link href={`/todos/${todo.id}`}>Todo: {todo.id}</Link>
        </p>
     ))}
    </>
  )
}

export default TodoList