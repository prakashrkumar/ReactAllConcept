  import React, { useLayoutEffect, useRef } from 'react'
  
  const Chat = () => {
    const chatRef=useRef(null)
    useLayoutEffect(()=>{
  chatRef.current.scrollTop=chatRef.current.scrollHeight
    },[])
 
    return (
      <div ref={{chatRef}}
      style={{
        height:"150px",
        border:"1px solid #ccc",
        overflowY:"scroll"
      }}
      
      >
        <p>Hello</p>
        <p>what is this</p>
        <p>Most well come</p>
        <h1>lorem*100

        </h1>
        Animated Box
        
      </div>
    )
  }
  
  export default Chat
  