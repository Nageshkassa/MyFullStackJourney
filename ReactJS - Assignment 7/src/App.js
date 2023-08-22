import "./styles.css";
import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div id="container">
      <div>
        <h1>counter : {count}</h1>
      </div>

      <div>
        <button id="decrementbtn" onClick={decrement}>
          decrease
        </button>
        <button id="incrementbtn" onClick={increment}>
          increment
        </button>
      </div>
    </div>
  );
}
export default Counter;
