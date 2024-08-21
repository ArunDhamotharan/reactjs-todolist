import React, { useState } from 'react';

export default function TodoCard(props) {
  const { children, handleDeleteTodos, index, handleEditTodos } = props;
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(prevState => !prevState);
  };

  return (
    <li className='todoItem'>
      <input
        type='checkbox'
        className='checkbox'
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <p className={`todoText ${isChecked ? 'struck' : ''}`}>{children}</p>
      <div className='actionsContainer'>
        {!isChecked && (
          <button onClick={() => handleEditTodos(index)}>
            <i className="fa-regular fa-pen-to-square"></i>
          </button>
        )}
        {isChecked && (
          <>
            <button onClick={() => handleDeleteTodos(index)}>
              <i className="fa-solid fa-trash"></i>
            </button>
            
          </>
        )}
      </div>
    </li>
  );
}
