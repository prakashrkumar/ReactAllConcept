import React, { useState } from 'react'

const MultipleInputForm = () => {
    const [formData,setFormData]=useState({
        name:"",
        email:"",
        age:""
    })
    const handlerSubmit=(e)=>{
        e.preventDefault();
        console.log(formData)
        

    }
    const handleChange=(e)=>{
        const{name,value}=e.target;
        setFormData((prev=>({
            ...prev,
            [name]:value,
        })))
          

    }
  return (
    <form onSubmit={handlerSubmit}>
       <h1>Form handing </h1> 
       <input type="text" placeholder='Name' name='name'value={formData.name} onChange={handleChange} />
       <br/>
       <input type="email" placeholder='Email' name="email" value={formData.email} onChange={handleChange} />
       <br/>
       <input type="number" placeholder='Age' name='age' value={formData.age} onChange={handleChange}  />
       <br/>
       <button type='submit'>Submit</button>
    </form>
  )
}

export default MultipleInputForm
