import { useEffect, useState } from "react";
import TodoItem from "./components/Task";
import "./App.css";
import TodoForm from "./components/Tasklist";
import { TaskContextProvider } from "./context"; // assume this is fine

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((t) => (t.id === id ? todo : t)));
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const todoComplete = (id) => {
    // return mapped array and toggle completed
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  // load from localStorage once
  useEffect(() => {
    try {
      const raw = localStorage.getItem("todos");
      if (!raw) return;
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        setTodos(parsed);
      }
    } catch (err) {
      console.error("Failed to parse todos from localStorage", err);
    }
  }, []);

  // persist
  useEffect(() => {
    try {
      localStorage.setItem("todos", JSON.stringify(todos));
    } catch (err) {
      console.error("Failed to save todos", err);
    }
  }, [todos]);

  return (
    <div className="min-h-screen w-150 sm:right-50 right-8  relative sm:relative bg-linear-to-br from-gray-700 to-black  bg-b p-0 m-0 bottom-8 flex-wrap flex flex-col sm:w-400">
    <TaskContextProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, todoComplete }}
    >
    <div className="flex flex-col justify-center h-screen flex-wrap"> 
      <div className="bg-linear-to-br from-gray-700 to-black  bg-b p-6 m-0 bottom-8 flex-wrap flex flex-col relative right-10 sm:right-0">
        <div className="max-w-xl mx-auto space-y-6 ">
          <h1 className="text-3xl font-bold text-center font-serif text-white">
            Commit-List
          </h1>

          <div>
            <TodoForm />
          </div>

          <div className="space-y-3">
            {todos.length === 0 ? (
              <p className="text-center text-white">No tasks yet — add one!</p>
            ) : (
              todos.map((todo) => (
                <div key={todo.id} className="mb-3">
                  <TodoItem todo={todo} />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      </div>
    </TaskContextProvider>
    </div>
  );
}

export default App;
