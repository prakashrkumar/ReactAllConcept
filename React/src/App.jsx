import React from 'react'
import './App.css'
import First from "./First"
import image from "./assets/react.svg"
import pic from "../public/vite.svg"
import Hello from './Hello'
import Second from './Second'
import Third from './Third'
import Five from './Five'
import SixProps from './SixProps'
import Button from './Button'

const App = () => {
  
  const arr=["prakash","Rupam","Ramesh"];
  const obj={
    name:"Rupam",
    age:28,
    class:"BSC"
  }
  function message(){
    alert("use karo time ko")
  }

  return (
    <div>
       <Hello/>
      <First/>
      hello kay chal raha hai
      <img src={image}/>
      <img src={pic}/>



      <Second/>
      <Third/>
      <Five/>


      <SixProps name="Prakash" age={25} arr1={arr} obj1={obj}/>



      <Button label="click me" handleClick={message}></Button>


     
    </div>
  )
}

export default App


