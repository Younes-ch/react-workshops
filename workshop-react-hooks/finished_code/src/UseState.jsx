import { useState } from "react";
import "./App.css";

function UseState() {
  const [count, setCount] = useState(0);

  const increment = () => {
    console.log("Count: " + count);

    const nextCount = count + 1;
    setCount(nextCount);

    console.log("New Count: " + nextCount);
  }
    
  return (
    <div className="tutorial">
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default UseState;
