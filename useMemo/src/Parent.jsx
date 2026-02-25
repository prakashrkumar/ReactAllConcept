import React from 'react'
import { useState,useMemo } from 'react';

const Parent = () => {
    const[count,setCount]=useState(0);
    const user=useMemo(() =>({name:"Prakash"}), [])
    console.log("parent componants is running")
  return (
    <div>
       <button onClick={()=>setCount(count+1)}>increase count</button>
       <Child user={user}/>
    </div>
  )
}




const  Child=React.memo(({user})=>{

    console.log("child is render")

return(
    <h1>User:{user.name}</h1>
)
    
   })
export default Parent