import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
        /*  values will come like this 
             id: 1,
             todo: "Todo msg",
             completed: false,  */
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {},
});

export const useTodo = () => {
    return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider