import React from 'react'
import { useState } from 'react'

function Student() {
   const [student,setStudent]=useState({
    name:"Prakash",
    grade:"A",
    city:"Delhi"
   })
   function changeCity(){
    setStudent({...student,city:"Lucknow"})
   }
  return (
    <div>
        <h1>{student.name}</h1>
        <h2>{student.grade}</h2>
        <h3>{student.city}</h3>
     <button onClick={changeCity}>ChangeCity</button>

    </div>
  )
}

export default Student