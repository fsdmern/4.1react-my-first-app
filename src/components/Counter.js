import React from 'react';
import {useState} from 'react';

const Counter = (props) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Counter No: {props.no}</h2>
      <p>You clciked {count} times</p>
      <button onClick={() => setCount(count - 1)}>-</button>
      {count}
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default Counter;
