import React, { useReducer } from 'react'

const Form = () => {
    function reducer(state,action){
       return {
        ...state,
        [action.name]:action.value 
       } 
    }
    const[formData,dispatch]=useReducer(reducer,{
        username:"",
        email:"",
    })
    function handleChange(e){
        dispatch({
            name:e.target.name,
            value:e.target.value
        })
    }
  return (
   <form>
     <input type="text" name='username' placeholder='username' value={formData.username} onChange={handleChange}/>
    <input type="email" name='email' placeholder='email' value={formData.email} onChange={handleChange}/>
    <p>
        {formData.username}
        <br/>
        {formData.email}
    </p>
   </form>
  )
}

export default Form
