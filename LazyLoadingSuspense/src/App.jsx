import React from 'react'
//import Post from './Post'
import { useState,lazy,Suspense } from 'react';


// for use lazy loading
const Post=lazy(()=>import("./Post"))

const App = () => {
  const [showPost,setShowPost]=useState(false)
  return (
    <div>
      <h>Hiii</h>
      <button onClick={()=>setShowPost(true)}>Show Posts</button>
   {
    showPost && <Suspense fallback={<p>Loading Post...</p>} ><Post/></Suspense>
   }
    </div>
  )
}

export default App
