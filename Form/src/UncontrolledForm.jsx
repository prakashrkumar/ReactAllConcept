import React, { useRef } from 'react'

const UncontrolledForm = () => {
    const nameRef=useRef();
    const emailRef=useRef()
    const handlerSubmit=(e)=>{
            e.preventDefault();
            console.log("name: ",nameRef.current.value)
            console.log("email:",emailRef.current.value)
            
    
        }
  return (
   <form onSubmit={handlerSubmit}>
    <h1>Uncontrolled from</h1>
    <input type="text" ref={nameRef}
     placeholder='Name'/>
    <br/>
    <input type="email" ref={emailRef} placeholder='Email'/>
    <br/>
    <button type="submit">submit</button>





   </form>
  )
}

export default UncontrolledForm
