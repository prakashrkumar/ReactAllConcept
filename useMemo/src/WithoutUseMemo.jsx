import React from 'react'
import { useState } from 'react';

const WithoutUseMemo = () => {
    const[count,setCount]=useState(0);
    const[text,setText]=useState("")

    const expensiveCalculation=()=>{
        console.log("Expensive Calculation");
        let total=0;
       for(let i=0;i<1000000000;i++){
           total+=i;
       }
       return total; 
    }
    const result=expensiveCalculation();
  return (
    <div>
      <h1>Result:{result}</h1>
      <button onClick={()=>setCount(count+1)}>increase count</button>
      <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/> 
      <p>count:{count}</p>
    </div>
  )
}

export default WithoutUseMemo
