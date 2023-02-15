import './App.css';

import { useReducer } from 'react';

const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
}

function reducer(state, action) {
  switch(action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 }
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 }    
    default:
      return state
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, { count : 0 })
  
  function increment() {
    dispatch({ type: ACTIONS.INCREMENT })
  }

  function decrement() {
    dispatch({ type: ACTIONS.DECREMENT })
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
