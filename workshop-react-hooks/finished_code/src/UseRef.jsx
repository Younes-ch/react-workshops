import React, { useEffect, useRef, useState } from 'react'
import './App.css'

function UseRef() {
    const [count, setCount] = useState(0);
    const countRef = useRef(0);

    const handleIncrement = () => {
        setCount(count + 1);
        countRef.current++;

        console.log(`State: ${count}`);
        console.log(`Ref: ${countRef.current}`);
    }
    // const inputRef = useRef(null);

    // useEffect(() => {
    //     inputRef.current.focus();   
    // }, [])
    
  return (
      <div className='tutorial'>
          <h1>
              Count: {countRef.current}
          </h1>
          <button onClick={handleIncrement}>Increment</button>
          {/* <input ref={inputRef} type='text' placeholder='Type something...' /> */}
      </div>
  )
}

export default UseRef