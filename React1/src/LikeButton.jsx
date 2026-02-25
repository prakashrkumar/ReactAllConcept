import React from 'react'
import { useState } from 'react'

function LikeButton() {
    const[Liked,setLiked]=useState(false)
  return (
    <div>
     <button onClick={()=>{setLiked(!Liked)}}>
        {Liked ? " 💘Liked":" 🩵Like"} text
        
        </button> 
        {
            Liked && <p>hello this is secreat message</p>
        }
    </div>
  )
}

export default LikeButton
