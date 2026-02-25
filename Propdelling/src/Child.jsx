import React from 'react'
import GrandChild from './GrandChild'

const Child = ({name,solve}) => {
  return (
<>
    <GrandChild name={name}/>
    <input type="text" placeholder='eneter' onChange={(e)=>{solve(e.target.value)}}/>
    </>
  )
}

export default Child
