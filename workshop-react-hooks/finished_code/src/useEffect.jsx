import { useEffect, useState } from "react";
import './App.css'

function UseEffect() {
    const [count, setCount] = useState(0);

    useEffect(() => { 
        console.log(`The count is ${count}`);

        return () => {
            console.log("I am being cleaned up!");
        } // cleanup function

    }, [count]); // dependency array

    return (
        <div className="tutorial">
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    )
}

export default UseEffect