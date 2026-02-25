import React from 'react'
import {useEffect,useLayoutEffect} from 'react'
const Test = () => {
 useEffect(() => {
   console.log("I am inside the UseEffect ")
 }, [])

 useLayoutEffect(() => {
    console.log("I am inside the UseLayOut ")
   
 }, [])
 
  return (
    <div>
      <h1>Test chal raha hai</h1>
    </div>
  )
}

export default Test
