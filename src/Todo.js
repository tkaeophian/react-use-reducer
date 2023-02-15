import { ACTIONS } from './App'
import React from 'react'

export default function Todo({todo, dispatch}) {
  return (
    <div className='todo-item'>
        <span style={{ color: todo.complete ? '#AAA' : '#000' }}>{todo.name}</span>
        <div>
            <button className='btn' onClick={() => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id }})}>Toggle</button>
            <button className='btn' onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id }})}>Delete</button>
        </div>
    </div>
  )
}
