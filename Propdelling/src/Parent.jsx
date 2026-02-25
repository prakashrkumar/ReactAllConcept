import React, { useState } from 'react'
import Child from './Child'
import GrandChild from './GrandChild';

const Parent = () => {
    //const username="Prakash";
    const [text,setText]=useState()
  return (
    <>
    {/*<Child name={username}/>*/}
    <Child solve={setText}/>
    <GrandChild value={text}/>
<h1>{text}</h1>
    </>
  )
}

export default Parent
