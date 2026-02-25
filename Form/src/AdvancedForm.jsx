import React, { useState } from 'react'

const AdvancedForm = () => {
    const [formData,setFormData]=useState({
            gender:"",
            agree:false,
            country:""
        })
        const handlerSubmit=(e)=>{
            e.preventDefault();
            console.log(formData)
            
    
        }
        const handleChange=(e)=>{
            const{name,type,value,checked}=e.target;
            setFormData((prev=>({
                ...prev,
                [name]:type==="checked" ? checked:value,
            })))
              
    
        }
  return (
    <form onSubmit={handlerSubmit}>
        <h1>form with radio ,chekbox and select</h1>
        <label>
            <input 
            type="radio" 
            name="gender" 
            value="Male"
            checked={formData.gender==="Male"}
           onChange={handleChange}
            
            />
            Male
        </label>
        <label>
            <input 
            type="radio" 
            name="gender" 
            value="Female" 
            checked={formData.gender==="Female"}
           onChange={handleChange}
            
            />
            Female
        </label>
        <br/>
        <lable>
            Country:
            <select name="country" value={formData.country}  onChange={handleChange}>
                <option value="India">India</option>
                <option value="Brazil">Brazil</option>
                <option value="US">Us</option>
                <option value="Russia">Russia</option>


            </select>
        </lable>
        <br/>
        <lable>
            <input 
            type="checkbox"
             name="agree"
             checked={formData.agree}
             onChange={handleChange}
             />
            I agree to term and conditions
        </lable>
        <br/>
        <button type="submit">Submit</button>
    </form>
  )
}

export default AdvancedForm
