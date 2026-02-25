import React from 'react'
import { useState } from 'react'

const Counter = () => {
    const [count, setCount]=useState(0)
    const increase=()=>{
        setCount(count+1)
    }
    const decrease=()=>{
        setCount(count-1)
        if(count==0){
            setCount(0)
        }
        
    }
  return (
    <div>
        <h1>count:{count}</h1>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrese</button>
      
    </div>
  )
}

export default Counter
