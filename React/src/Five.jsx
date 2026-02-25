import React from 'react'
import "./Five.css"


const Five = () => {
    let isLogIn=true;
    let isVisible=false;
    let message;
if(isLogIn){
        message=<p> wellcome to this page4</p>
    }
    else{
        message=<p>please login first</p>
    }
  return (
    <div>
      {
        isLogIn && <p>wellcome to this page99999</p>
      } 
      <h1 >{message}</h1> 

   <h1 className={isVisible ? "visible":"unvisible"}>condensectional rendering</h1>

       
      
    </div>
  )
}

export default Five
