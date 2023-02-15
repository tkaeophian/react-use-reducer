import './App.css';

import { useReducer, useState } from 'react';

import Todo from './Todo';

export const ACTIONS = {
  ADD_TODO: 'add-todo',
  TOGGLE_TODO: 'toggle-todo',
  DELETE_TODO: 'delete-todo'
}

function reducer(state, action) {
  switch(action.type) {
    case ACTIONS.ADD_TODO:
      return [...state, newTodo(action.payload.name)]
    case ACTIONS.TOGGLE_TODO:
      return state.map(todo => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete : !todo.complete}
        }
        return todo
      })
    case ACTIONS.DELETE_TODO:
      return state.filter(todo => todo.id !== action.payload.id)
    default:
      return state
  }
}

function newTodo(name) {
  return { id: Date.now(), name: name, complete: false }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, [])
  const [name, setName] = useState('')

  function handleSubmit (e) {
    e.preventDefault()

    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } })
    setName('')
  }
 
  return (
    <div className='App'>
      <form onSubmit={handleSubmit}>
        <p>Enter your todo item</p>
        <input className='input-field' type='text' value={name} onChange={(e) => setName(e.target.value)} />
      </form>
      <div className='todo-items'>
        {todos.map((todo) => {
          return <Todo key={todo.id} todo={todo} dispatch={dispatch} />
        })}
      </div>
   </div>
  );
}

export default App;
