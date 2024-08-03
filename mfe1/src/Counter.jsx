import React, { useState } from "react";
import './Counter.scss';


function Counter(){
    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(count + 1);
    }
  return (
    <div className="bg-blue">
        <div>Counter: {count}</div>
        <div><button className="button-40" onClick={handleClick}>Increment Counter</button></div>
    </div>
  )
}

export default Counter;