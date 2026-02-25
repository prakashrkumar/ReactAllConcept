import React, { useEffect, useState } from 'react'

const Users = () => {
    const[users,setUsers]=useState([])
   useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setUsers(json))




   },[]) 
  return (
    <div>
      <h1>users List</h1>
      {
       users.map((u)=>{
        return (
            <li key={u._id}>{u.name}</li>
        )
       }) 
      }
    
     
    </div>
  )
}

export default Users