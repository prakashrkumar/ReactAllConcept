import React from 'react'
import {useContext} from "react"
import {NameContext} from "./App"

const GrandChild = () => {
    const {name,role}=useContext(NameContext)
  return (
    <div>
       <h1>{name}</h1>
       <h2>{role}</h2>
    </div>
  )
}

export default GrandChild

