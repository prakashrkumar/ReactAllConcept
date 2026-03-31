import React from 'react'
//import { createPortal } from 'react-dom'
//import PortalTest from './PortalTest'
import { useState } from 'react';
import Modal from './Modal';
const App = () => {
  const [open,setOpen]=useState(false)
  return (
    <div>
      <h1>Create </h1>
    {/*  <PortalTest/> */}
    
      {/*createPortal(<h2>Portel</h2>,document.body)*/}




 <button onClick={()=>setOpen(true)}>Open Model</button>
<Modal isOpen={open} onClose={()=>setOpen(false)}>
  <h2>Hello from Model</h2>
  <p>This is  a simple modal without context ...</p>
</Modal>
    </div>
  )
}

export default App

