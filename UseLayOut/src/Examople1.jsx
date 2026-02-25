import React, { useRef, useState } from 'react'
import {useLayoutEffect} from 'react'
const Example1 = () => {
    const boxRef=useRef(null)
const[height,setHight]=useState(0)
 useLayoutEffect(()=>{
setHight(boxRef.current.clientHeight)
 },[])
 
  return (
   <div>
     <div ref={boxRef} style={{width:"200px", padding:"20px", background:"#eee"}}>
      <h1>Hello world meausre me</h1>
    </div>
    <p>Height:{height}</p>
   </div>
  )
}

export default Example1