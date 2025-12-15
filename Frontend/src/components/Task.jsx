import React, { useState } from 'react'
import { useTodo } from '../context'

function TodoItem({todo}) {
   const [isTodoEditable,setTodoEditable] = useState(false) 
   const { updateTodo, deleteTodo, todoComplete } = useTodo()
   const [todoMsg,setTodoMsg] = useState(todo.todo)

   const editTodo = () => {
    updateTodo(todo.id,{...todo, todo : todoMsg})
    setTodoEditable(false)
   }
   const todoCompleted = () => {
    todoComplete(todo.id);
   }

  return (
<div
  className="flex items-center gap-3 bg-white shadow-sm rounded-lg p-3 
             border border-slate-200 transition-all hover:shadow-md"
>
  <input
    type="checkbox"
    onChange={todoCompleted}
    checked={todo.completed}
    className="w-5 h-5 accent-green-600 cursor-pointer"
  />

  <input
    type="text"
    value={todoMsg}
    readOnly={!isTodoEditable}
    onChange={(e) => setTodoMsg(e.target.value)}
    className={`flex-1 px-2 py-1 rounded-md outline-none transition 
               ${isTodoEditable 
                  ? "bg-yellow-50 border border-yellow-300" 
                  : "bg-transparent"} 
               ${todo.completed ? "line-through text-gray-400" : "text-gray-800"}`}
  />

  <button
    onClick={() => {
      if (todo.completed) return;
      if (isTodoEditable) editTodo();
      else setTodoEditable((prev) => !prev);
    }}
    disabled={todo.completed}
    className={`px-3 py-1 rounded-md font-medium transition 
                ${todo.completed 
                   ? "bg-gray-300 text-gray-500 cursor-not-allowed" 
                   : "bg-black text-white hover:bg-gray-800 active:scale-95"}`}
  >
    {isTodoEditable ? "Save" : "Edit"}
  </button>

  <button
    onClick={() => deleteTodo(todo.id)}
    className="px-3 py-1 rounded-md bg-red-500 text-white 
               hover:bg-red-700 active:scale-95 transition"
  >
    Delete
  </button>
</div>

  )
}

export default TodoItem
