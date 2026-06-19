import React, { useState } from 'react'
import { useTodo } from '../context';

function TodoForm() {
    const [todo, setTodo] = useState("")
    const {addTodo} = useTodo()

    const add = (e) => {
        e.preventDefault()

        if(!todo) return
    
        // instead of todo: todo , we can simply write just todo becuase both are same name 
        // also we didnt gave id: Date.now() here, because those functionalities defined in App.jsx in addTodo
        // We can write id: Data.now() here as well, but then we remove it from addTodo in App.jsx
        // Why use { todo } instead of { todo: todo }, This uses JavaScript ES6 Shorthand Property Names. Key matches variable name.Omit value to save space.Removes redundant code.Improves overall readability. The addTodo method spreads these exact properties later.
        addTodo({todo, completed:false})

        //It resets the input field after form submission. Empties the text box. Prevents duplicate entries. Ready for next task.
        setTodo("")
    }

    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;


