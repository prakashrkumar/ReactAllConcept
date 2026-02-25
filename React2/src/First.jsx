import React, { useEffect, useState } from 'react'

const First = () => {
    const[count,setCount]=useState(0)
   useEffect(()=>{
    document.title=`Count:${count}`
    console.log("Componant re-render")
   },[count]) 
  return (
    <div>
      <h1>count:{count}</h1>
      <button onClick={()=>{setCount(count+1)}}>Increase</button>
    </div>
  )
}

export default First
