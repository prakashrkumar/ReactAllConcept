import React, { useEffect, useEffectEvent, useState } from 'react'

const Timer = () => {
    const [count,setCount]=useState(0)
    const onTick=useEffectEvent(()=>{
 console.log(">>>>>>>>>>>>",count)
        setCount(c=>c+1)
    })
    useEffect(()=>{
        
        
      const id=setInterval(()=>{
       
        onTick()

      },1000)
      return ()=>{
        clearInterval(id)
      }
    },[])
  return (
    <div>
      <h1>Count :{count}</h1>
    </div>
  )
}

export default Timer
