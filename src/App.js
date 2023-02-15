import './App.css';

import { useReducer } from 'react';

function reducer(state, action) {
  switch(action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }    
    default:
      return state
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, { count : 0 })
  
  function increment() {
    dispatch({ type: 'increment' })
  }

  function decrement() {
    dispatch({ type: 'decrement' })
  }

  return (
    <div className='App'>
      <button className='btn' onClick={decrement}>-</button>
        <span className='number'>{state.count}</span>
      <button className='btn' onClick={increment}>+</button>
   </div>
  );
}

export default App;
