import React, { useState } from 'react'

const SampleForm = () => {
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const handlerSubmit=(e)=>{
        e.preventDefault();
        console.log("Name",name)
        console.log("Email",email)

    }
  return (
    <form onSubmit={handlerSubmit}>
        <label  >User Name</label>
        <input 
        type="text" 
        value={name}
        onChange={(e)=>{setName(e.target.value)}}
        
        />
        <br/>
          <label  > Email</label>
        <input 
        type="email" 
        value={email}
        onChange={(e)=>{setEmail(e.target.value)}}
        />
        <br/>
        <button type="submit">Submit</button>
    </form>
  )
}

export default SampleForm
