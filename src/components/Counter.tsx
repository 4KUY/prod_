import {useState} from "react";
import classes from './Counter.module.scss'


export const Counter = () => {
    const [count, setCount] = useState(0);
  return (
    <div className={classes.button}>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
