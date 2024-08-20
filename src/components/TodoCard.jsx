import React from 'react'

export default function TodoCard(props) {  // Renders a list item with content passed as children
  const {children, handleDeleteTodos, index, handleEditTodos } = props
  return (
    
    <li className = 'todoItem' >
    {children}
    <div className='actionsContainer'>
    <button onClick={() =>{
      handleEditTodos(index)
    }}>
      <i class="fa-regular fa-pen-to-square"></i>
    </button>
    <button onClick={() =>{
        handleDeleteTodos(index)
    }}>
      <i class="fa-solid fa-trash"></i>
    </button>
    
    </div>
    </li> // Render each todo as an <li> element
  )
}
