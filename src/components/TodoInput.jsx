
import { useState } from "react"

export default function TodoInput(props){
    const { handleAddTodos, todoValue, setTodoValue } = props
    
    
    return(
        <header>
            <input value={todoValue} onChange={(e) => {
                setTodoValue(e.target.value)
            }} placeholder="Enter To-Do....." />
             <button 
                onClick={() => {
                    if (todoValue.trim()) { // Check if the input is not empty or just spaces
                        handleAddTodos(todoValue);
                        setTodoValue(''); // Clear the input field after adding the to-do
                    }
                }}
            >ADD</button>
        </header>
    )
}