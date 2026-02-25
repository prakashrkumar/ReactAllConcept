import React, { useCallback, useState } from 'react'

const Counter = () => {
  const [count,setCount]=useState(0) 
let increment=useCallback(()=>{
    setCount((prev)=>prev+1)
},[])
  return (
    <div>
      <h2>Count:{count}</h2>
      <button onClick={increment}>Increment</button>
    </div>
  )
}

export default Counter
