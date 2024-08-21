//app.jsx
import { useState,useEffect } from "react"
import TodoInput from "./components/Todoinput"
import TodoList from "./components/TodoList"

function App() {

 
  //the below is called the stateful varable which is used WHEN  we want the user to interact with the variable 
  const [todoValue, setTodoValue] = useState('')//we are declaring it here coz the todoCard component canten access it in order to eidt the to do 
  const [todos, setTodos] = useState([])
  
  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({ todos: newList }))
  }

  function handleAddTodos(newTodo){
    const newTodoList = [...todos, newTodo]
    setTodos(newTodoList)
    persistData(newTodoList)
  }

  function handleDeleteTodos(index){
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleEditTodos(index){
      const valuetoBeEdited = todos[index]
      setTodoValue(valuetoBeEdited)
      handleDeleteTodos(index)
      
  }

  useEffect(() => {
    if (!localStorage) {
      return;
    }
  
    let localTodos = localStorage.getItem('todos');
    if (!localTodos) {
      return;
    }
  
    console.log(localTodos);
    localTodos = JSON.parse(localTodos).todos;
    setTodos(localTodos);
  
  }, []);
  

  
  return (
    <>
     <TodoInput todoValue = {todoValue} setTodoValue ={setTodoValue} handleAddTodos = {handleAddTodos}/>
     {/* //passing attributes */}
     <TodoList handleDeleteTodos = {handleDeleteTodos} handleEditTodos ={handleEditTodos} todos = {todos} /> 
    </>
  )
}

export default App
