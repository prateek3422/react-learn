import React, { useState } from 'react'
import Counter from './counter'

const App = () => {
    const [count, setCount] = useState(0);

    const addValue = () => {
      // setCount((prevCount) => prevCount+1 )
      // setCount((prevCount) => prevCount+1 )
      // setCount((prevCount) => prevCount+1 )
  
      if (count < 20) {
        setCount(count + 1);
      }
    };
    const removeValue = () => {
      if (count > 0) {
        setCount(count - 1);
      }
    };
  
    return (
      <>
        <h1> counter is {count}</h1>
        <button onClick={addValue}>add </button>
        <button onClick={removeValue}>remove</button>
      </>
    );
  
}

export default App