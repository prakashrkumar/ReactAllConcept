import React, { useCallback, useState } from 'react'
import Child from './Child'

const Parent = () => {
  const [count,setCount]=useState(0) 
let handleClick=useCallback(()=>{
    console.log("Button clicked")
},[])
  return (
    <div>
      <h2>Count:{count}</h2>
      <button onClick={()=>setCount(count+1)}>parent Button</button>
      <Child click={handleClick}/>
    </div>
  )
}

export default Parent