import { useState } from "react"
import './Counter.scss'

export const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    setCount(count - 1);
  }

  return (
    <div>
      {count}
      <button className="button" onClick={increment}>increment</button>
      <button className="button" onClick={decrement}>decrement</button>
    </div>
  )
}