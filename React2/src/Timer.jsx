import React, { useEffect, useState } from 'react'

const Timer = () => {
    const[second,setSecond]=useState(0)
   useEffect(()=>{
    const interval=setInterval(()=>{
        //setSecond(second+1)

        setSecond((prev)=>prev+1)
    },1000);
   // cleanup up function
   return ()=>{
    clearInterval(interval)
    console.log("Timer clear")
   }
   
   },[]) 
  return (
    <div>
      <h1>second:{second}</h1>
     
    </div>
  )
}

export default Timer
