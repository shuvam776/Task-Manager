import {createContext, useContext} from "react"

export const TaskContext = createContext({
    todos: [
        {
            id: 1,
            todo: " Todo msg",
            completed: false,
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    todoComplete: (id) => {}
})


export const useTodo = () => {
    return useContext(TaskContext)
}

export const TaskContextProvider = TaskContext.Provider

