import { useState } from "react";
import classes from './Counter.module.scss';

export const Counter = () => {
    const [count, setCount] = useState(0);
    const increment = () => setCount(count + 1);
    return (
        <div className={classes.button}>
            <h1>{"count"}</h1>
            <h1>{count}</h1>
            <button onClick={increment}>+1</button>
        </div>
    );
};

export default Counter;