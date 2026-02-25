import React, { useEffect, useEffectEvent, useState } from 'react'

const AutoSaveForm = () => {
    const[formData,setFormData]=useState({
        name:"",
        email:"",
     
    })
  const saveData=useEffectEvent(()=>{
      console.log("data save",formData)
  })


    useEffect(()=>{
        const interval=setInterval(()=>{
            saveData()

        },3000)
        return ()=>{
            clearInterval(interval)
        }

    },[])
  return (
    <form>
        <input type="text" placeholder='Name' name='name'value={formData.name} onChange={(e)=>{setFormData({...formData,name:e.target.value})}} />
        <input type="email" placeholder='Email' name="email" value={formData.email} onChange={(e)=>{setFormData({...formData,email:e.target.value})}}  />
    </form>
  )
}

export default AutoSaveForm
