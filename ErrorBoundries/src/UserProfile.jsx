import React from 'react'

const UserProfile = ({userData}) => {
   const username=userData.name;
   const age=userData.age
  return (
    <div style={
    {border:'1px solid #000', padding:'20px'}
    }>
      <h1>This is userProfile</h1>
      <p>name:{username}</p>
      <p>Age:{age}</p>
    </div>
  )
}

export default UserProfile
