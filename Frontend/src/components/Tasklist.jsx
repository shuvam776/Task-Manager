import React, { useState } from 'react'
import { useTodo } from '../context/TaskContext';


function TodoForm() {
    const [todo, setTodo] = useState("")
    const {addTodo} = useTodo()

    const add = (e) => {
      e.preventDefault()

      if (!todo) return

      addTodo({todo,completed : false})
      setTodo("")
    }

  return (
      <form onSubmit={add}  className="flex">
          <input
              type="text"
              placeholder="Write Tasks..."
              className="w-full border border-white text-2xl text-white rounded-l-lg p-3 outline-none duration-150 bg-white/20 py-1.5"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
          />
          <button type="submit" className="px-3 py-1 text-white bg-green-500 hover:bg-green-600 rounded-r-lg shrink-0">
              Add Task
          </button>
      </form>
  );
}

export default TodoForm;