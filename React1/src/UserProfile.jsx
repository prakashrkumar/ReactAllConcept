import React from 'react'
import { useState } from 'react'

function UserProfile() {
    const [name,setName]=useState("Prakash");
    const [age,setAge]=useState(25)
  return (
    <div>
        <h1>{name}</h1>
        <h2>{age}</h2>
     <button onClick={()=>{setName("Ramesh")}}>Change Name</button>
     <button onClick={()=>{setAge(age+5)}}>change Age</button>
    </div>
  )
}

export default UserProfile