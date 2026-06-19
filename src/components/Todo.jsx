import { useState, useEffect } from 'react'
import './Todo.css'

const STORAGE_KEY = 'todoList'

const Todo = () => {

  const [todos, setTodos] = useState(()=>{
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []
  })

  const [name,setName] = useState('')
  const [date,setDate] = useState('')

  useEffect(()=>{
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }, [todos])


  function handleSubmit(event){
    event.preventDefault()
    const trimmedName = name.trim()
    if(!trimmedName || !date) return

    setTodos(prev=> [...prev, {name: trimmedName, date}])
    setName('')
    setDate('')
  }

  function handleDelete(index){
    setTodos(prev => prev.filter((_, i) => (i !== index)))
  }


  return (
    <main className="todo-app">
      <header className="todo-app__header">
        <h1>To do List</h1>
      </header>

      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Todo name"
          className="todo-form__input"
          autoComplete="off"
          required
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          type="date"
          className="todo-form__input"
          required
          value={date}
          onChange={e => setDate(e.target.value)}
        />
        <button type="submit" className="todo-form__button todo-form__button--add">
          Add
        </button>
      </form>

      <ul className="todo-list">
        {todos.map((item, index) => (
          <li className="todo-item" key={index}>
            <span className="todo-name">{item.name}</span>
            <span className="todo-date">{item.date}</span>
            <button
              className="todo-form__button todo-form__button--delete"
              onClick={() => handleDelete(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default Todo

