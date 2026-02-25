import React from 'react'
import { useState } from 'react'

function ToggleText() {
    const[isVisible,setIsVisible]=useState(false)
  return (
    <div>
     <button onClick={()=>{setIsVisible(!isVisible)}}>
        {isVisible ? "hide":"show"} text
        
        </button> 
        {
            isVisible && <p>hello this is secreat message</p>
        }
    </div>
  )
}

export default ToggleText


