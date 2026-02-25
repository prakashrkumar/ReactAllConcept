import React from 'react'
import { useState } from 'react'

function InputExample() {
   
  const[name,setName]=useState("")
  return (
    <div>
        <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
        <h1>{name || "Guest"}</h1>

    </div>
  )
}

export default InputExample