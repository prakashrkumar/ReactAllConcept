import React from 'react'
import { useParams} from 'react-router-dom'
const User = () => {
    console.log(useParams())
    const {id}=useParams()
  return (
    <div>
      <h1>Wellcom to user page</h1>
      <h2>user id : {id}</h2>
    </div>
  )
}

export default User
