import './App.css';

import { useState } from 'react';

function App() {

  const [count, setCount] = useState(0)

  function increment() {
    setCount(prevCount => prevCount + 1)
  }

  function decrement() {
    setCount(prevCount => prevCount - 1)
  }

  return (
    <div className='App'>
      <button className='btn' onClick={decrement}>-</button>
        <span className='number'>{count}</span>
      <button className='btn' onClick={increment}>+</button>
   </div>
  );
}

export default App;
