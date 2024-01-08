import './App.css'
import TodoList from './components/todo-list'
import NewTodo from './components/NewTodo'
import { useState } from 'react'

const App: React.FC = () => {
  const [todos, setTodos] = useState<{id: string; text:string}[]>([])

  const inputTaskHandler = (text: string) => {
    setTodos(prevTodos => [...prevTodos, {id: Math.random().toString(), text: text}])
  }
  const toDeleteHandler = (todoId: string) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== todoId);
    });
  }
  return (
    <div className='app'>
      <NewTodo onAddTodo = {inputTaskHandler}/>
      <TodoList todos={todos} onDeleteTodo={toDeleteHandler}/>
    </div>
  )
}

export default App
