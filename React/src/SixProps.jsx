import React from 'react'

const SixProps = ({name="Rupam",age=23,arr1,obj1}) => {
    //const {name,age}=props
  return (
    <div>
      <h1>{name}</h1>
      <h2>{age}</h2>
     <ul>
        {
        arr1.map((ele,index)=>{
            return(
                <li key={index}>{ele}</li>
            )
        })    
        }
     </ul>
     <h1>{obj1.name}</h1>
     <h2>{obj1.age}</h2>
    </div>
  )
}

export default SixProps
